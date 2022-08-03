import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import TableHeader from "./tableHeader";

const UserTable = ({ users, onSort, selectedSort, ...rest }) => {
    const columns = {
        name: { iter: "name", name: "Имя" },
        qualities: { name: "Качества" },
        professions: { iter: "profession.name", name: "Профессия" },
        completedMeetings: {
            iter: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { iter: "rate", name: "Оценка" },
        bookmark: { iter: "bookmark", name: "Избранное" },
        delete: {}
    };
    const usersTableHeaderRender = () => {
        return <TableHeader {...{ onSort, selectedSort, columns }} />;
    };

    const usersTableBodyRender = () => {
        return users.map((user) => <User key={user._id} {...user} {...rest} />);
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
    selectedSort: PropTypes.object.isRequired
};
