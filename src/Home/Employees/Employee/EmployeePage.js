import React, { Component } from 'react';
import axios from 'axios';
import classes from './Employee.module.css';
class EmployeePage extends Component {
  state = {
    EmployeeInfo: null,
  }
  componentDidMount() {
    axios.get(`https://employees-eb181-default-rtdb.firebaseio.com/employees/${this.props.match.params.id}.json`)
      .then(response => {
        const EmployeesData = response.data;
        this.setState({ EmployeeInfo: EmployeesData });
      })
  }
  render() {
    let EmployeeRander = null;
    if (this.state.EmployeeInfo) {
      EmployeeRander = (<div className={classes.Employee}>
        <div className={classes.Rounded}>  <img alt="user" src={this.state.EmployeeInfo.avatar} /></div>
        <h2> {this.state.EmployeeInfo.first_name}  {this.state.EmployeeInfo.last_name}</h2>
        <h3>{"C-" + this.state.EmployeeInfo.user_id}</h3>
        <p>Email: {this.state.EmployeeInfo.email}</p>
        <div className={classes.Description}>
          <h3>Description</h3>
          {this.state.EmployeeInfo.body}
        </div>
      </div>);
    } else {
      EmployeeRander = <div><p>Loading...!</p></div>
    }
    return (
      <>
        {EmployeeRander}

      </>
    )
  }
}

export default EmployeePage;