import React, { Component } from 'react';
import axios from 'axios';
import TaskItem  from './Taskitem';
import ListGroup from "react-bootstrap/ListGroup";
import FormTask from './FormTask'
import apiUrl from '../../apiConfig'
import {withRouter} from 'react-router-dom'


class TaskList extends Component {
    state = { 
        tasks:[]
     }
    componentDidMount(){
        const user=this.props.user
        axios({
            method: "GET",
            url: apiUrl + "/tasks",
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
        .catch(error=>console.error(error))
    }
    render() { 
        console.log(this.state.tasks)
        return ( 
            <div>
                <h1>Tasks:</h1>
                <ListGroup >
                    {this.state.tasks.map((task,index)=>( 
                    <TaskItem key={index} taskName={task.title} />
                    ))}
                  
                </ListGroup>

            </div>
         );
    }
}
 
export default TaskList;