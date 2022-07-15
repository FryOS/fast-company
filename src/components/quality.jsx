import React from "react";

const Qualitie = ({color, name, id}) => {
    
    return(
        <>
            <span className={"badge m-1 bg-" + color} key={id}>{name}</span>
        </>
    )    
}

export default Qualitie;