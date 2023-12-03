import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateEmployee = () => {
    const [employeeData, setEmployeeData] = useState({ firstName: '', lastName: '', email: '' });
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        // Fetch the employee data for the given id.
        // axios.get(`/api/employees/${id}`).then((response) => {
        //   setEmployeeData(response.data);
        // });
    }, [id]);

    const handleChange = (e) => {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update the employee data.
            // await axios.put(`/api/employees/${id}`, employeeData);
            history.push('/employee-list');
        } catch (error) {
            console.error('Updating employee failed:', error);
        }
    };

    return (
        <div>
            <h2>Update Employee</h2>
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

export default UpdateEmployee;
