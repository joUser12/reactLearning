import axios from 'axios';

const url = 'http://localhost:8000/users'



// get all user
export const getallUsers = () => {
    debugger
    return axios.get(url)
}

// adduser
export const addUser = (user) => {
    debugger
    return axios.post(url, user)
}

export const editUser = (id, user) => {
    return axios.put(`${url}/${id}`, user)
}

export const deleteUser = (id) => {
    debugger
    return axios.delete(`${url}/${id}`)
}