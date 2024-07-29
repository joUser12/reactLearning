import axios from 'axios';
const url = 'http://localhost:8000/authentication';
export const getallUser = () => {
    return axios.get(url)
}
export const login = (userData) => {    const validEmail = 'user12@gmail.com';
    const validPassword = '123456';

    if (userData.email === validEmail && userData.password === validPassword) {
        return { success: true, message: 'Login successful' };
    } else {
        return { success: false, message: 'Invalid email or password' };
    }
};
