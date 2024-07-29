import UserTable from '../Table/UserTable';
import AddForm from '../Form/AddForm';
import { deleteUser, editUser, addUser, getallUsers } from '../../services/api';
import React, { useEffect, useState } from 'react';

const User = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await getallUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const userIdDelete = async (userId) => {
        try {
            await deleteUser(userId);
            getUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const addUserData = async (userObject) => {
        try {
            await addUser(userObject);
            getUsers();
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const updateUserValue = async (user) => {
        try {
            const { id, ...value } = user;
            await editUser(id, value);
            getUsers();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div>
            <AddForm addUserValue={addUserData} editingUser={editingUser} updateUser={updateUserValue} />
            <UserTable userData={users} deleteUserById={userIdDelete} setEditingUser={setEditingUser} />
        </div>
    );
};

export default User;
