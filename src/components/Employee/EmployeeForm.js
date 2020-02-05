import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'

import { signUp } from '../../auth/api'
import messages from '../../auth/messages'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/DropdownItem'
import axios from 'axios'
import apiUrl from '../../apiConfig'
class EmployeeForm extends Component {

    state = {
   employees:[],
   user:{}
    }

  componentDidMount(){
    console.log(this.props)
    axios({
      url: apiUrl + '/users',
      method: 'GET'
    })
    .then((res)=>{
       let employees = res.data.users
        this.setState({employees:employees})
    })
    .catch(error=>alert(error))
    
}
//************************ This Was When Manager Sign Up The Employee **********************
  // handleChange = event => this.setState({
  //   [event.target.name]: event.target.value
  // })

  // onSignUp = event => {
  //   event.preventDefault()

  //   const { alert } = this.props

  //   signUp(this.state)
  //   //   .then(() => signIn(this.state))
  //   //   .then(res => setUser(res.data.user))
  //     .then(() => alert(messages.addEmployeeSuccess, 'success'))
  //   //   .then(() => history.push('/'))
  //     .catch(error => {
  //       console.error(error)
  //       this.setState({ email: '', password: '', passwordConfirmation: '' })
  //       alert(messages.addEmployeeFailure, 'danger')
  //     })
  // }
//************************ END **********************

  handleSelect = (empEmail) =>{
    let user = this.props.user
    let credentials={
      email:empEmail
    }
     axios({
      url: apiUrl + '/departments',
      method: 'POST',
      data: {
        credentials: {
          email: credentials.email
        },
        headers:{
          "Authorization":`Bearer ${user.token}`
      }
      }
    })
    .then(
      res => console.log(res.data)
  )
    // .then((res)=>{
    //   //  let employees = res.data.users
    //     // this.setState({employees:employees})
    //     // this.setState(({...copyState})=>{
    //     //     copyState = res.data.departments[0].employees
    //     //     return copyState
    //     // })
    //     console.log(res)
    // })
    .catch(error=>alert(error))
  }
  render () {
    // const { email, password, passwordConfirmation } = this.state

    return (
      <React.Fragment>
       {/* <form className='auth-form' onSubmit={this.onSignUp}> */}
        <h3>Add New Employee</h3>
        {/* <DropdownButton title='Dropdowna' onSelect={function(evt){console.log(evt)}}>
  <DropdownItem eventKey='abc'>Dropdown link</DropdownItem>
  <DropdownItem eventKey={['a', 'b']}>Dropdown link</DropdownItem>
</DropdownButton> */}
<DropdownButton title='Employees' onSelect={()=>{this.handleSelect()}}>

    {this.state.employees.map((employee,index)=> 
      <DropdownItem key={index} eventKey={employee.email}> {employee.name} </DropdownItem>
    )}
</DropdownButton>
        {/* <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        /> */}
        {/* <button type="submit">Add</button>
      </form> */}
      </React.Fragment>
    )
  }
}

export default withRouter(EmployeeForm)
