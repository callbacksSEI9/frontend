import React, { Component } from 'react';
import axios from 'axios';
import TaskItem  from './task/Taskitem';
import ListGroup from "bootstrap";
class TaskList extends Component {
    state = { 
        Tasks:[]
     }
    componentDidMount(){
        const user=this.props.user
        axios({
            url: apiUrl + "/tasks",
            method: "get",
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
            <div>
                <ListGroup >
                    {this.state.Tasks.map((task,index)=>( 
                    <TaskItem key={index} taskName={task.name} />
                    ))}
                   
                </ListGroup>

            </div>
         );
    }
}
 
export default TaskList;