import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Here you would call your API to fetch employees.
        // axios.get('/api/employees').then((response) => {
        //   setEmployees(response.data);
        // });
    }, []);

    return (
        <div>
            <h2>Employee List</h2>
            <Link to="/add-employee">Add Employee</Link>
            <table>
                {/* Table headers */}
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                {/* Table body */}
                <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <Link to={`/update-employee/${employee.id}`}>Update</Link>
                            <button onClick={() => {/* Call API to delete employee */}}>
                                Delete
                            </button>
                            <Link to={`/view-employee/${employee.id}`}>View</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
