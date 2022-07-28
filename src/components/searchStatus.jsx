import React from "react";
import PropTypes from "prop-types";

const SearchStatus = (props) => {
    const changeClasses = () => {
        let classes = "badge ";
        classes +=
            props.usersLength === 0 ? "bg-danger bg-primary" : "bg-primary";
        return classes;
    };
    const getCountMessage = () => {
        let message = "";
        message =
            props.usersLength > 4 || props.usersLength === 1
                ? props.usersLength + " человек тусанёт с тобой сегодня"
                : props.usersLength === 0
                ? "Никто с тобой не тусанёт"
                : props.usersLength + " человека тусанёт с тобой сегодня";
        return message;
    };

    return (
        <>
            <h1>
                <span className={changeClasses()}> {getCountMessage()}</span>
            </h1>
        </>
    );
};

SearchStatus.propTypes = {
    usersLength: PropTypes.number.isRequired
};

export default SearchStatus;
