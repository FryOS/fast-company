import React from "react";
import PropTypes from "prop-types";
import User from "./user";

const UserTable = ({ users, onSort, currentSort, ...rest }) => {
    const handleSort = (item) => {
        if (currentSort.iter === item) {
            onSort({
                ...currentSort,
                order: currentSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ iter: item, order: "asc" });
        }
    };

    const usersTableHeaderRender = () => {
        return (
            // count !== 0 && (
            <tr className="table-primary">
                <th
                    onClick={() => handleSort("name")}
                    className="table-primary"
                    scope="col"
                >
                    Имя
                </th>
                <th className="table-primary" scope="col">
                    Качества
                </th>
                <th
                    onClick={() => handleSort("profession.name")}
                    className="table-primary"
                    scope="col"
                >
                    Профессия
                </th>
                <th
                    onClick={() => handleSort("completedMeetings")}
                    className="table-primary"
                    scope="col"
                >
                    Встретился, раз
                </th>
                <th
                    onClick={() => handleSort("rate")}
                    className="table-primary"
                    scope="col"
                >
                    Оценка
                </th>
                <th
                    onClick={() => handleSort("bookmark")}
                    className="table-primary"
                    scope="col"
                >
                    Избранное
                </th>
                <th className="table-primary" scope="col"></th>
            </tr>
        );
        // );
    };

    const usersTableBodyRender = () => {
        return (
            // allUsers.length !== 0 &&
            users.map((user) => <User key={user._id} {...user} {...rest} />)
        );
    };

    return (
        <table className="table table-primary">
            <thead>{usersTableHeaderRender()}</thead>
            <tbody>{usersTableBodyRender()}</tbody>
        </table>
    );
};

export default UserTable;

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
};
