import React, {useState} from "react";
import API from "../api";

const Users = () => {
        
    
    
    const [count, setCountPeople] = useState(() => API.users.fetchAll());
    
    const formCount = () => {
        return count === 0 ? "Никто с тобой не тусанет!" : `${count} человек тусанет с тобой сегодня`;
    }

    const handleDeleteUser =()=>{
      
    }

    
    return(    
    <>
    <p>{formCount()} </p>
    
    <table className="table-primary">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        
        <td>Джон Дориан</td>
        <td><span class="badge bg-primary">Нудила</span><span class="badge bg-primary m-2">Неуверенный</span><span class="badge bg-primary">Странный</span> </td>
        <td>Доктор</td>
        <td>36</td>
        <td>2.5/5</td>
        <td><button className="btn btn-primary" type="button" onClick={handleDeleteUser}>Удалить</button></td>
      </tr>
      
    </tbody>
  </table>
    </>)
    
};

export default Users;