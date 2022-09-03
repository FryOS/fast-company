import React from "react";
import Qualitie from "./quality";
import Bookmark from "./common/bookmark";
import PropTypes from "prop-types";

const User = ({
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    bookmark,
    onBookmark,
    onDelete,
    _id
}) => {
    return (
        <>
            <tr className="table-primary" key={props._id}>
                <td className="table-primary" scope="col">
                    {name}
                </td>
                <td className="table-primary" scope="col">
                    {qualities.map((q) => (
                        <Qualitie key={q._id} {...q} />
                    ))}
                </td>
                <td className="table-primary" scope="col" key={profession._id}>
                    {profession.name}
                </td>
                <td className="table-primary" scope="col">
                    {completedMeetings}
                </td>
                <td className="table-primary" scope="col">
                    {rate}
                </td>
                <td className="table-primary" scope="col">
                    <Bookmark
                        status={bookmark}
                        onClick={() => onBookmark(_id)}
                    />
                </td>
                <td className="table-primary" scope="col">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => onDelete(_id)}
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired
};

export default User;
