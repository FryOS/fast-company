import React, {useState} from "react";
import User from "./user"

const Users = ({users, onDelete}) => {    
//const {users, onDelete} = props
const usersTableHeaderRender = () => {
      
  return (
        
        users.length !== 0
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
        users.length !== 0 && users.map((user) => (
          <User key={user._id} {...user} onDelete={onDelete}/>
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