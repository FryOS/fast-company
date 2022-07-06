import React, {useState} from "react";
import API from "../api";

const Users = () => {    
    
    const [users, setCountPeople] = useState(() => API.users.fetchAll());
    
    const getCountMessage = () => {

        let message = '';
        message = users.length > 4 || users.length === 1 ? users.length + " человек тусанёт с тобой сегодня" :
        users.length === 0 ? "Никто с тобой не тусанёт" :
        users.length + " человека тусанёт с тобой сегодня";
        return message;
    }

    const handleDeleteUser = (id)=>{
      console.log(id)
      setCountPeople((prevState) => prevState.filter((user) => user._id !== id));
    };

const usersTableHeaderRender = () => {
      return (
        users.length !== 0
        && <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col"></th>
        </tr>
      )
    }

    const usersTableBodyRender = () => {
      return (
        users.length !== 0 && users.map((user) => (
      <tr key={user._id}>
        <td scope="col">{user.name}</td>
        <td scope="col">{user.qualities.map((qualitie) => <span className={"badge m-1 bg-" + qualitie.color} key={qualitie._id}>{qualitie.name}</span>)}</td>
        <td scope="col" key={user.profession._id}>{user.profession.name}</td>
        <td scope="col">{user.completedMeetings}</td>
        <td scope="col">{user.rate}</td>
        <td scope="col"><button type="button" className="btn btn-primary" onClick={() => handleDeleteUser(user._id)}>Удалить</button></td>
      </tr>
        ))
      )
    }

    
    
    return(    
    <>
      <h1>{getCountMessage()}</h1>
      
      <table className="table-primary">
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