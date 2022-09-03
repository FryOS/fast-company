import React from "react";
import UserPage from "./page/userPage";
import UsersListPage from "../components/page/usersListPage";
import { useParams } from "react-router-dom";

const UserView = () => {
    const { userId } = useParams();

    return <>{userId ? <UserPage userId={userId} /> : <UsersListPage />}</>;
};

export default UserView;
