import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";


class TaskItem extends Component {
    state = {  }
    render() { 
        return ( <div>
 <ListGroup>
     {this.props.taskName}
     <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    task
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">complete</Dropdown.Item>
    <Dropdown.Item href="#/action-2">uncomplete</Dropdown.Item>
    <Dropdown.Item href="#/action-3">inprogress</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
 </ListGroup>
        </div> );
    }
}
 
export default TaskItem;