
import React, { useEffect, useState } from 'react';
const AddForm = ({ addUserValue, editingUser, updateUser }) => {
    const initialFormState = { id: null, name: "", email: "", contact: "", status: "Active" };
    const [user, setUser] = useState(initialFormState);

    useEffect(() => {
        if (editingUser) {
            debugger
            setUser(editingUser);
            setIsEditing(true);
        } else {
            setUser(initialFormState);
            setIsEditing(false);
        }
    }, [editingUser]);

    const [isAddUser, setAddUser] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const addUserClick = () => {
        setAddUser(true);
    }

    const formClose = () => {
        setAddUser(false);
        setIsEditing(false);
    }
    const handleSubmit = async event => {
        event.preventDefault();
        if (!user.name || !user.email) {
            return;
        }
        if (isEditing) {
            updateUser(user);
            setIsEditing(false);
        } else {
            const { id, ...userWithoutId } = user;
            addUserValue(userWithoutId)
        }
        setUser(initialFormState);
        setAddUser(false);
    };
    return (
        <>
            {
                !isAddUser && !isEditing && (
                    <button type="button" onClick={addUserClick} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModals">
                        {isEditing ? 'Edit User' : 'Add User'}
                    </button>
                )
            }

            {
                (isAddUser || isEditing) && (
                    <form
                        onSubmit={handleSubmit}
                        className="needs-validation"
                    >
                        <label htmlFor="Name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Name"
                            required
                        />
                        <label htmlFor="Email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Email"
                            required
                        />
                        <label htmlFor="Contact">Contact:</label>
                        <input
                            type="number"
                            name="contact"
                            value={user.contact}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Contact"
                            required
                        />
                        <br />
                        <label htmlFor="Email">Status:</label>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="status"
                                    value="Active"
                                    onChange={handleInputChange}
                                    checked={user.status === "Active"}
                                />
                                Active
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="status"
                                    value="Inactive"
                                    checked={user.status === "Inactive"}
                                    onChange={handleInputChange}
                                />
                                Inactive
                            </label>
                        </div>
                        <br />
                        <br />
                        <button className="btn btn-primary">Submit</button> |
                        <button className="btn btn-danger" onClick={formClose}>Close</button>
                    </form>
                )
            }


        </>
    );
}

export default AddForm;
