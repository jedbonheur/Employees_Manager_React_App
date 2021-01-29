
import React, { Component } from 'react';
import classes from './Home.module.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Employees from './Employees/Employees';
import EmployeePage from './Employees/Employee/EmployeePage';

class Home extends Component {



 render() {
  return (
   <>
    <div className={classes.Navigations}>
     <ul>
      <li>
       <NavLink to='/home'
        activeStyle={{
         color: "#ba3900",
        }}
       >Home</NavLink>
      </li>
      <li>
       <NavLink to={
        {
         pathname: '/employees/',
         hash: '#record',

        }
       }
        activeStyle={{
         color: "#ba3900",
        }}>Employees</NavLink>
      </li>
     </ul>
    </div>
    <div className={classes.Main}>
     <Switch>
      <Route path='/employees/' component={Employees} />
      <Route path='/home/' render={() => <div><h1>Welcome Home</h1></div>} />
      <Route path="/employee/:id" component={EmployeePage} />
      <Redirect from='/' exact to='/home' />
     </Switch>

    </div>

   </>
  )
 }
}
export default Home;