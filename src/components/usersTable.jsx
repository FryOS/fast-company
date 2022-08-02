import React from "react";
import PropTypes from "prop-types";
import User from "./user";

const UserTable = ({ users, onSort, ...rest }) => {
    const usersTableHeaderRender = () => {
        return (
            // count !== 0 && (
            <tr className="table-primary">
                <th
                    onClick={() => onSort("name")}
                    className="table-primary"
                    scope="col"
                >
                    Имя
                </th>
                <th className="table-primary" scope="col">
                    Качества
                </th>
                <th
                    onClick={() => onSort("profession.name")}
                    className="table-primary"
                    scope="col"
                >
                    Профессия
                </th>
                <th
                    onClick={() => onSort("completedMeetings")}
                    className="table-primary"
                    scope="col"
                >
                    Встретился, раз
                </th>
                <th
                    onClick={() => onSort("rate")}
                    className="table-primary"
                    scope="col"
                >
                    Оценка
                </th>
                <th
                    onClick={() => onSort("bookmark")}
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
    onSort: PropTypes.func.isRequired
};
