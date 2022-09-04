import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";

const RegisterForm = () => {
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
            <div className="mb-4">
                <label htmlFor="validationCustom04" className="form-label">
                    State
                </label>
                <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">
                        Choose...
                    </option>++
                </select>
                <div className="invalid-feedback">Please select a valid state.</div>
            </div>
            <button
                classNameName="btn btn-primary w-100 mx-auto"
                type="submit"
                disabled={!isValid}
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
