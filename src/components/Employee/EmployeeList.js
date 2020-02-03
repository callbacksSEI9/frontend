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
            this.setState(({...copyState})=>{
                copyState = res.data
                return copyState
            })
        })
        .catch(error=>alert.error(error))
    }
    render() { 
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