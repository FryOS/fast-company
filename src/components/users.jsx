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

    const pageSize = 2;

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionsSelect = (item) => {
        setSelectedProf(item);
    };

    const clearFilter = (params) => {
        setSelectedProf();
    };

    const filteredUsers = selectedProf
        ? allUsers.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
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
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column dlex-shrink-0 p-3">
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
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus usersLength={count} />
                <table className="table table-primary">
                    <thead>{usersTableHeaderRender()}</thead>
                    <tbody>{usersTableBodyRender()}</tbody>
                </table>
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Users;
