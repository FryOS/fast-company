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

    const changeClasses = () => {
      let classes = "badge "
      classes += users.length === 0 ? "bg-danger bg-primary" : "bg-primary";
      return classes;
    }

    const handleDeleteUser = (id)=>{
      setCountPeople((prevState) => prevState.filter((user) => user._id !== id));
    };

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
      <tr className="table-primary" key={user._id}>
        <td className="table-primary" scope="col">{user.name}</td>
        <td className="table-primary" scope="col">{user.qualities.map((qualitie) => <span className={"badge m-1 bg-" + qualitie.color} key={qualitie._id}>{qualitie.name}</span>)}</td>
        <td className="table-primary" scope="col" key={user.profession._id}>{user.profession.name}</td>
        <td className="table-primary" scope="col">{user.completedMeetings}</td>
        <td className="table-primary" scope="col">{user.rate}</td>
        <td className="table-primary" scope="col"><button type="button" className="btn btn-primary" onClick={() => handleDeleteUser(user._id)}>Удалить</button></td>
      </tr>
        ))
      )
    }

    
    
    return(    
    <>
      <h1><span className={changeClasses()}> {getCountMessage()}</span></h1>
      
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