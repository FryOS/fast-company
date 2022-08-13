import React from "react";
import UserPage from "./userPage";
import Users from "./users";
import { useParams } from "react-router-dom";

const UserView = () => {
    const { userId } = useParams();

    return <>{userId ? <UserPage userId={userId} /> : <Users />}</>;
};

export default UserView;
