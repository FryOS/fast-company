import React, { useState } from "react";

import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import API from "./api";

const App = () => {
    const [users, setUsers] = useState(() => API.users.fetchAll());

    const handleDeleteUser = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== id));
    };

    const handleBookmark = (id) => {
        const index = users.findIndex((u) => u._id === id);
        const newUsers = [...users];
        newUsers[index].bookmark
            ? (newUsers[index].bookmark = false)
            : (newUsers[index].bookmark = true);
        setUsers(newUsers);
    };

    return (
        <>
            <SearchStatus usersLength={users.length} />;
            <Users
                users={users}
                onDelete={handleDeleteUser}
                onBookmark={handleBookmark}
            />
            ;
        </>
    );
};

export default App;
