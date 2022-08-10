import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/main">
                    Main
                </a>
                <a className="navbar-brand" href="/login">
                    Login
                </a>
                <a className="navbar-brand" href="/users">
                    Users
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
