import React, { useState } from "react";
import TextField from "./textField";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    // const [password, setPassword] = useState(); // Для каждого поля делать свое состояние. Что не есть хорошо

    //  по name отслеживаем какое поле мы изменяем, handleChange универсальный метод для каждого поля
    // value меняем для каждого поля в зависимости какой target используется
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    //  TextField унифицированный элемент
    return (
        <form action="">
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
        </form>
    );
};

export default Login;
