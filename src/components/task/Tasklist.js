import React, { Component } from 'react';
import axios from 'axios';
import TaskItem  from './Taskitem';
import ListGroup from "react-bootstrap/ListGroup";
import FormTask from './FormTask'
import apiUrl from '../../apiConfig'
import {withRouter} from 'react-router-dom'


class TaskList extends Component {
    state = { 
        Tasks:[]
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
        .catch(error=>alert.error(error))
    }
    render() { 
        return ( 
            <div>
                <ListGroup >
                    {this.state.Tasks.map((task,index)=>( 
                    <TaskItem key={index} taskName={task} />
                    ))}
                   {/* <FormTask /> */}
                </ListGroup>

            </div>
         );
    }
}
 
export default TaskList;