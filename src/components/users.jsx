import React, { useState, useEffect } from "react";
import User from "./user";
import Pagination from "./pagination";
import SearchStatus from "./searchStatus";
import GroupList from "./groupList";
import API from "../api";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users: allUsers, onDelete, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();

    const pageSize = 4;

    const handlePageChange = (pageIndex) => {
        console.log("page:", pageIndex);
        setCurrentPage(pageIndex);
    };

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    const handleProfessionsSelect = (item) => {
        setSelectedProf(item);
    };

    const clearFilter = (params) => {
        setSelectedProf();
    };

    const filteredUsers = selectedProf
        ? allUsers.filter((user) => user.profession === selectedProf)
        : allUsers;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

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
            allUsers.length !== 0 &&
            userCrop.map((user) => (
                <User key={user._id} {...user} onDelete={onDelete} {...rest} />
            ))
        );
    };

    return (
        <>
            <SearchStatus usersLength={count} />
            {professions && (
                <>
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionsSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2 mb-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </>
            )}

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
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Users;
