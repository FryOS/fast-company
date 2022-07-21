import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i
                className={status ? "bi bi-bookmark-fill" : "bi bi-bookmark"}
            ></i>
        </button>
    );
};

Bookmark.propTypes = {
    status: PropTypes.string.isRequired,
    rest: PropTypes.object.isRequired
};

export default Bookmark;
