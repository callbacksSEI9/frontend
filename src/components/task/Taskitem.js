import React, { Component } from 'react';
import ListGroup from "bootstrap";

class TaskItem extends Component {
    state = {  }
    render() { 
        return ( <div>
 <ListGroup.item >
     {this.props.task}
 </ListGroup.item>
        </div> );
    }
}
 
export default TaskItem;