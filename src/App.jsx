import React from "react";
// import Users from "./components/users";
import Login from "./components/login";
import Navbar from "./components/ui/navBar";
import Main from "./components/main";
import { Route } from "react-router-dom";
import UserView from "./components/userView";

const App = () => {
    return (
        <>
            <Navbar />
            {/* <Users /> */}
            {/* <Route path="/login" component={Login} /> */}
            <Route path="/login/:type?" render={(props) => <Login {...props} />} />
            <Route path="/main" component={Main} />
            <Route path="/users/:userId?" component={UserView} />
        </>
    );
};

export default App;
