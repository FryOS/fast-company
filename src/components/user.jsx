import React from "react";
import Qualitie from "./quality";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
    return (
        <>
            <tr className="table-primary" key={props._id}>
                <td className="table-primary" scope="col">
                    {props.name}
                </td>
                <td className="table-primary" scope="col">
                    {props.qualities.map((q) => (
                        <Qualitie key={q._id} {...q} />
                    ))}
                </td>
                <td
                    className="table-primary"
                    scope="col"
                    key={props.profession._id}
                >
                    {props.profession.name}
                </td>
                <td className="table-primary" scope="col">
                    {props.completedMeetings}
                </td>
                <td className="table-primary" scope="col">
                    {props.rate}
                </td>
                <td className="table-primary" scope="col">
                    <Bookmark
                        status={props.bookmark}
                        onClick={() => props.onBookmark(props._id)}
                    />
                </td>
                <td className="table-primary" scope="col">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => props.onDelete(props._id)}
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
