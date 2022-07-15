import React from "react";
import Qualitie from "./quality";
import Bookmark from "./bookmark";

const User = (props) => {
    return (
        <>
        <tr className="table-primary" key={props._id}>
            <td className="table-primary" scope="col">{props.name}</td>
            <td className="table-primary" scope="col">{props.qualities.map(q=> (<Qualitie key={q._id} {...q}/>))}</td>
            <td className="table-primary" scope="col" key={props.profession._id}>{props.profession.name}</td>
            <td className="table-primary" scope="col">{props.completedMeetings}</td>
            <td className="table-primary" scope="col">{props.rate}</td>
            <td className="table-primary" scope="col"><Bookmark onClick={()=> props.onBookmark()}/></td>
            <td className="table-primary" scope="col"><button type="button" className="btn btn-primary" onClick={() => props.onDelete(props._id)}>Удалить</button></td>
      </tr>
        </>
    )
}

export default User;