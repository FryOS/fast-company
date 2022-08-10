import React from "react";
import Users from "./components/users";
import Login from "./components/login";
import Navbar from "./components/navBar";
import Main from "./components/main";
import { Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar />
            {/* <Users /> */}
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/users" component={Users} />
        </>
    );
};

export default App;
