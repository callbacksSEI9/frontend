import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import ManagerView from './components/ManagerView/ManagerView';
import EmployeeList from './components/Employee/EmployeeList'
import EmployeeView from './components/Employee/EmployeeView';

class App extends Component {
  constructor () {
    super()

    this.state = {
      taskFilter: 'none',
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  changeTaskFiler = (event)=>{
    const task = event.target.innerHTML
    this.setState({taskFilter:task})
    console.log(this.state.taskFilter)
}

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} chnageFilter={this.changeTaskFiler} />
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/tasks' exact render={()=> 
            user.manager? (<ManagerView user={user} taskFilter={this.state.taskFilter}/>): (<EmployeeView user={user} taskFilter={this.state.taskFilter} />) 
          } />
           <AuthenticatedRoute user={user} path='/tasks/:type' exact render={()=> 
            user.manager? (<ManagerView user={user} taskFilter={this.state.taskFilter}/>): (<EmployeeView user={user} taskFilter={this.state.taskFilter} />) 
          } />
           <AuthenticatedRoute user={user} path='/emp' render={()=> {
            // {window.location.reload()}
             return (<EmployeeList user={user} />)
           }} />

        </main>
      </React.Fragment>
    )
  }
}

export default App
