import React, { useState, useEffect } from "react";
import TextField from "./textField";
import { validator } from "../utils/validator";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    // const [password, setPassword] = useState(); // Для каждого поля делать свое состояние. Что не есть хорошо

    const [errors, setErrors] = useState({});

    const isValid = Object.keys(errors).length === 0;

    //  по name отслеживаем какое поле мы изменяем, handleChange универсальный метод для каждого поля
    // value меняем для каждого поля в зависимости какой target используется
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validateConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Электронная почта введена некорректна"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать одну цифру"
            },
            min: {
                message: "Пароль должен составить минимум из 8 символов",
                value: 8
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validateConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data); //   передавая data мы можем видеть какие данные мы передаем в полях
    };

    //  TextField унифицированный элемент
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-4 shadow">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Электронная почта"
                            name="email"
                            value={data.email}
                            error={errors.email}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Пароль"
                            type="password"
                            name="password"
                            value={data.password}
                            error={errors.password}
                            onChange={handleChange}
                        />
                        <button className="btn btn-primary w-100 mx-auto" type="submit" disabled={!isValid}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
