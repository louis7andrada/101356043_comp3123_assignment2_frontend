import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [userData, setUserData] = useState({ email: '', password: '', name: '' });
    const history = useHistory();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Here you would call your API to perform signup.
            // await axios.post('/api/signup', userData);
            history.push('/login');
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                />
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                />
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
