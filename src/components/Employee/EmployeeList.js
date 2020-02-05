import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import EmployeeItem from "./EmployeeItem"
import axios from 'axios'
import apiUrl from '../../apiConfig'

class EmployeeList extends Component {
    state={
        employees:[]
    }
    componentDidMount(){
        const user = this.props.user
        axios({
            method:'GET',
            url:apiUrl+'/departments',
            headers:{
                "Authorization":`Bearer ${user.token}`
            }
        })
        .then((res)=>{
           let employees = res.data.responses
            this.setState({employees:employees})
            // this.setState(({...copyState})=>{
            //     copyState = res.data.departments[0].employees
            //     return copyState
            // })
            console.log(employees)
        })
        .catch(error=>alert(error))
    }
    render() { 
        {this.state.employees.map((employee,index) => ( 
            console.log(employee.email)
            // <EmployeeItem key={index} employee_name={employee.email}></EmployeeItem>
        ))}  
        return ( 
            <ListGroup>
                {this.state.employees.map((employee,index) => ( 
                    <EmployeeItem key={index} employee_name={employee.name}></EmployeeItem>
                ))}     
            </ListGroup>
        );
    }
}
 
export default EmployeeList;