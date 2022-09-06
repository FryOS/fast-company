import React, { useState, useEffect } from "react";
import UserTable from "../../ui/usersTable";
import Pagination from "../../common/pagination";
import SearchStatus from "../../ui/searchStatus";
import GroupList from "../../common/groupList";
import API from "../../../api";
import _ from "lodash";
import PropTypes from "prop-types";
import { paginate } from "../../../utils/paginate";

const UsersListPage = () => {
    console.log(API);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [searchValue, setSearchValue] = useState("");

    const pageSize = 8;

    const [users, setUsers] = useState();
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDeleteUser = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== id));
    };

    const handleBookmark = (id) => {
        const index = users.findIndex((u) => u._id === id);
        const newUsers = [...users];
        newUsers[index].bookmark
            ? (newUsers[index].bookmark = false)
            : (newUsers[index].bookmark = true);
        setUsers(newUsers);
    };

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchValue]);

    useEffect(() => {
        console.log(users);
    }, [users]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleUserSearch = ({ target }) => {
        setSelectedProf(); // show all users
        setSearchValue(target.value);
    };

    const handleProfessionsSelect = (item) => {
        setSearchValue("");
        setSelectedProf(item);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const clearFilter = (params) => {
        setSelectedProf();
    };

    if (users) {
        const filteredNameUsers = users.filter((userName) => {
            return userName.name
                .toLowerCase()
                .includes(searchValue.toLowerCase());
        });

        console.log(users);

        const filteredUsers = selectedProf
            ? users.filter(
                  (user) =>
                      JSON.stringify(user.profession) ===
                      JSON.stringify(selectedProf)
              )
            : searchValue
            ? filteredNameUsers
            : users;
        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const userCrop = paginate(sortedUsers, currentPage, pageSize);

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column dlex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionsSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2 mb-2"
                            onClick={() => clearFilter(professions)}
                        >
                            Очистить
                        </button>
                    </div>
                )}

                <div className="d-flex flex-column">
                    <SearchStatus usersLength={count} />
                    <form>
                        <input
                            placeholder="Search"
                            type="text"
                            name="search"
                            value={searchValue}
                            onChange={handleUserSearch}
                        />
                    </form>
                    {count > 0 && (
                        <UserTable
                            users={userCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDeleteUser}
                            onBookmark={handleBookmark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "Loading...";
};

UsersListPage.propTypes = {
    users: PropTypes.array
};

export default UsersListPage;
