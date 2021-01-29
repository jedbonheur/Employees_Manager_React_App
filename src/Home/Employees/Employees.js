import React, { Component } from 'react';
import Employee from './Employee/Employee';
import axios from 'axios';
class Employees extends Component {
 state = {
  employeesList: null,
 }
 componentDidMount() {
  axios.get('https://employees-eb181-default-rtdb.firebaseio.com/employees.json')
   .then(response => {
    const EmployeesData = response.data;
    this.setState({ employeesList: EmployeesData });
   })
 }
 render() {
  let EmployeeData = null;
  if (this.state.employeesList) {
   EmployeeData = <Employee data={this.state.employeesList} />;
  } else {
   EmployeeData = <div>Loading.... !</div>
  }
  return (
   <>
    { EmployeeData}
   </>
  )
 }
}

export default Employees;