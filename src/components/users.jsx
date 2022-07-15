import React, {useState} from "react";
import User from "./user"

const Users = (props) => {    

const usersTableHeaderRender = () => {
      return (
        props.users.length !== 0
        && <tr className="table-primary">
          <th className="table-primary" scope="col">Имя</th>
          <th className="table-primary" scope="col">Качества</th>
          <th className="table-primary" scope="col">Профессия</th>
          <th className="table-primary" scope="col">Встретился, раз</th>
          <th className="table-primary" scope="col">Оценка</th>
          <th className="table-primary" scope="col"></th>
        </tr>
      )
    }

    const usersTableBodyRender = () => {
      return (
        props.users.length !== 0 && props.users.map((user) => (
          <User key={user._id} {...props}/>
        ))
      )
    }    
    
    return(    
    <>
      
      
      <table className="table table-primary">
        <thead>
          {usersTableHeaderRender()}
        </thead>
        <tbody>
          {usersTableBodyRender()}
        </tbody>
    </table>
    </>)    
};

export default Users;