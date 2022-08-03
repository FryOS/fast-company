import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.iter === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ iter: item, order: "asc" });
        }
    };

    return (
        <tr className="table-primary">
            {Object.keys(columns).map((column) => (
                <th
                    key={column}
                    onClick={
                        columns[column].iter
                            ? () => handleSort(columns[column].iter)
                            : undefined
                    }
                    {...{ role: columns[column].iter && "button" }}
                    className="table-primary"
                    scope="col"
                >
                    {columns[column].name}
                </th>
            ))}

            {/* <th
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
            <th className="table-primary" scope="col"></th> */}
        </tr>
    );
};

TableHeader.propTypes = {
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
