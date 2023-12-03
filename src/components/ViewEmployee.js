import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewEmployee = () => {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();

    useEffect(() => {
        // Fetch the employee details for the given id.
        // axios.get(`/api/employees/${id}`).then((response) => {
        //   setEmployee(response.data);
        // });
    }, [id]);

    return (
        <div>
            <h2>View Employee Details</h2>
            <div>
                <strong>First Name:</strong> {employee.firstName}
            </div>
            <div>
                <strong>Last Name:</strong> {employee.lastName}
            </div>
            <div>
                <strong>Email:</strong> {employee.email}
            </div>
        </div>
    );
};

export default ViewEmployee;
