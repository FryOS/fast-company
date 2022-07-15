import React from "react";

const Bookmark = ({status, ...rest}) => {
    return (
        <button {...rest} >
            {console.log(status)}
            <i className={status ? "bi bi-bookmark-fill" : "bi bi-bookmark"}></i>
        </button>
    )
}

export default Bookmark;