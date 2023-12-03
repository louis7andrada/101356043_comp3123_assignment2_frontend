import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const history = useHistory();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Here you would call your API to perform login.
            // const response = await axios.post('/api/login', credentials);
            // Store the received token in localStorage
            // localStorage.setItem('token', response.data.token);
            history.push('/employee-list');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
