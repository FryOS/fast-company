import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users, onDelete, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const count = users.length;
    const pageSize = 4;

    const handlePageChange = (pageIndex) => {
        console.log("page:", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    const usersTableHeaderRender = () => {
        return (
            count !== 0 && (
                <tr className="table-primary">
                    <th className="table-primary" scope="col">
                        Имя
                    </th>
                    <th className="table-primary" scope="col">
                        Качества
                    </th>
                    <th className="table-primary" scope="col">
                        Профессия
                    </th>
                    <th className="table-primary" scope="col">
                        Встретился, раз
                    </th>
                    <th className="table-primary" scope="col">
                        Оценка
                    </th>
                    <th className="table-primary" scope="col">
                        Избранное
                    </th>
                    <th className="table-primary" scope="col"></th>
                </tr>
            )
        );
    };

    const usersTableBodyRender = () => {
        return (
            users.length !== 0 &&
            userCrop.map((user) => (
                <User key={user._id} {...user} onDelete={onDelete} {...rest} />
            ))
        );
    };

    return (
        <>
            <table className="table table-primary">
                <thead>{usersTableHeaderRender()}</thead>
                <tbody>{usersTableBodyRender()}</tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    rest: PropTypes.object.isRequired
};

export default Users;
