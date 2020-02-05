import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
    .then(res => console.log(res.data))
    .catch(error=>alert(error))
  }

  render () {
    return (
      <React.Fragment>
        <h3>Add New Employee</h3>
        <DropdownButton title='Employees' onSelect={()=>{this.handleSelect()}}>
          {this.state.employees.map((employee,index)=> 
            <DropdownItem key={index} eventKey={employee.email}> {employee.name} </DropdownItem>
          )}
        </DropdownButton>
      </React.Fragment>
    )
  }
}

export default withRouter(EmployeeForm)
