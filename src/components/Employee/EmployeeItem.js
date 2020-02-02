import React, { Component } from 'react'
import ListGroup from "bootstrap"

class EmployeeItem extends Component {

    render() { 
        return ( 
            <ListGroup.item>
                {this.props.employee_name}
            </ListGroup.item>
        );
    }
}
 
export default EmployeeItem;