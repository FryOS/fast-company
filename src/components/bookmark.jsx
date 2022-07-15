import React from "react";

const Bookmark = ({status, ...rest}) => {
    return (
        <button className="table-primary" {...rest} >
            <i className={status ? "bi bi-bookmark" : "bi bi-bookmark-fill"}></i>
        </button>
    )
}

export default Bookmark;