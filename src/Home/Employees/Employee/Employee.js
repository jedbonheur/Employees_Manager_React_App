import React from 'react';
import { Link } from 'react-router-dom'
import classes from './Employee.module.css';
const Employee = (props) => {
 const EmployListProcessed = props.data.map(employee => {
  return (
   <Link to={`/employee/${employee.id}`} key={employee.id}>
    <div className={classes.Employee}>
     <div className={classes.Rounded}>  <img alt="user" src={employee.avatar} /></div>
     <h2> {employee.first_name}  {employee.last_name}</h2>
     <h3>{"C-" + employee.user_id}</h3>
     <p>Email: {employee.email}</p>
    </div>
   </Link>

  )
 })
 return (
  <>
   <div className={classes.EmployeesWrapper}>
    {EmployListProcessed}
   </div>
  </>
 )
}

export default Employee;