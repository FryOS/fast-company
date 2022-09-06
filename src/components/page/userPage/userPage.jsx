import React, { useEffect, useState } from "react";
import API from "../../../api";
import PropTypes from "prop-types";
import Qualities from "../../ui/qualities";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const history = useHistory();
    const handleBackToList = () => {
        history.push("/users");
    };
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, []);

    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия:{user.profession.name}</h2>
                <Qualities qualities={user.qualities} />
                <h6>completedMeetings:{user.completedMeetings}</h6>
                <h2>Rate:{user.rate}</h2>
                <button onClick={() => handleBackToList()}>
                    Все пользователи
                </button>
            </>
        );
    }
    return "loading...";
};

UserPage.propTypes = {
    userId: PropTypes.string
};

export default UserPage;
