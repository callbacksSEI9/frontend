import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/DropdownItem'
import axios from 'axios'
import apiUrl from '../../apiConfig'
class EmployeeForm extends Component {

    state = {
   employees:[],
   user:{},
   empEmail:''
    }

  componentDidMount(){
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
    // let user = this.props.user
  
    this.state.empEmail = empEmail
    let credentials ={
      email:this.state.empEmail
    }
    console.log(this.state.empEmail)
      axios({
      url: apiUrl + `/departments/${this.props.user._id}`,
      method: 'POST',
      data: {
        credentials: {
         email: credentials.email
        }
      }
    })
    .then(res => console.log(res.data))
    .catch(error=>alert(error))
  }

  render () {
    return (
      <React.Fragment>
        <h6>Add New Employee</h6>
        <br></br>
        <DropdownButton title='Employees' onSelect={(empEmail)=>{this.handleSelect(empEmail)}}>
          {this.state.employees.map((employee,index)=> 
            <DropdownItem key={index} eventKey={employee.email}> {employee.name} </DropdownItem>
          )}
        </DropdownButton>
       
      </React.Fragment>
    )
  }
}

export default withRouter(EmployeeForm)
