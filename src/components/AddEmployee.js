import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddEmployee = () => {
    const [employeeData, setEmployeeData] = useState({ firstName: '', lastName: '', email: '' });
    const history = useHistory();

    const handleChange = (e) => {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Here you would call your API to add an employee.
            // await axios.post('/api/employees', employeeData);
            history.push('/employee-list');
        } catch (error) {
            console.error('Adding employee failed:', error);
        }
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={employeeData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    value={employeeData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <input
                    type="email"
                    name="email"
                    value={employeeData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <button type="submit">Save</button>
                <button onClick={() => history.push('/employee-list')}>Cancel</button>
            </form>
        </div>
    );
};

export default AddEmployee;
