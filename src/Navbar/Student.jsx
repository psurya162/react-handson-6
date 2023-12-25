import React, { useContext } from 'react';
import ContextData from './Cotextdata'; // Ensure the correct filename
import { NavLink, useNavigate } from 'react-router-dom';

const Student = () => {
    const DataContext = useContext(ContextData);
    const navigate = useNavigate();

    return (
        <div>
            <div className="main2">
            <h1>student</h1>
            <button className='btn' onClick={() => navigate('/addnewStudent')}>Add student</button>
            </div>
            
            <table border={1} style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Batch</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {DataContext.data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.batch}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>
                            <td><NavLink to="/editstudent" state={{data:index}}>edit</NavLink></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Student;
