import React, {useState} from "react";

import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import API from "./api";



const App = () => {
    
    const [users, setCountPeople] = useState(() => API.users.fetchAll());
    
    const handleDeleteUser = (id)=>{
        setCountPeople((prevState) => prevState.filter((user) => user._id !== id));
      };

    return (
        <>
            <SearchStatus usersLength={users.length}/>;
            <Users users={users} onDelete={handleDeleteUser} />;
        </>
    )
}

export default App;