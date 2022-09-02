import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState();
    // const [password, setPassword] = useState(); // Для каждого поля делать свое состояние. Что не есть хорошо

    const handleChange = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    };

    return (
        <form action="">
            <div>
                <label htmlFor="email">Email</label>{" "}
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>{" "}
                <input type="password" id="password" />
            </div>
        </form>
    );
};

export default Login;
