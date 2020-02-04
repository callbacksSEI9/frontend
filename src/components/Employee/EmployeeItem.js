import React, { Component } from 'react'
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
class EmployeeItem extends Component {

    render() { 
        return ( 
            <ListGroupItem>
                {this.props.employee_name}
            </ListGroupItem>
        );
    }
}
 
export default EmployeeItem;