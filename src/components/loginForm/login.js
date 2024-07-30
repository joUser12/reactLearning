import React, { useState } from 'react'
import './login.css'
import { login } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const initialLoginForm = { email: "", password: "" }
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  }
  const handleSUbmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(loginForm);
      if (response.success) {
        await toast("Login successful")
        navigate('/user');
      } else {
        toast(response.message)
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }


  return (
    <div>
      <div className="center-container">
        <div class="card " style={{ width: "18rem" }} >
          <div class="card-body mb-2">
            <form onSubmit={handleSUbmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={handleInputChange}
                  value={loginForm.email}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                  value={loginForm.password}
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  className="form-control"
                  id="exampleInputPassword1"

                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login