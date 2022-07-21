import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name, id }) => {
    return (
        <>
            <span className={"badge m-1 bg-" + color} key={id}>
                {name}
            </span>
        </>
    );
};

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Qualitie;
