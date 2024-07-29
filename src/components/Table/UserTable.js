import React, { useEffect, useState } from 'react';

const UserTable = ({ userData, deleteUserById,setEditingUser }) => {
    const deleteData = async (id) => {
        deleteUserById(id);
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {userData?.length > 0 ? (
                    userData.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td>{user.status}</td>
                            <td>
                                <button
                                  onClick={() => setEditingUser(user)}
                                  className="button btn btn-primary"
                                >
                                    Edit
                                </button> |
                                <button
                                    className="button btn btn-danger"
                                    onClick={() => deleteData(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>No users</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default UserTable;
