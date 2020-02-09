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
        // console.log("this")
        const user=this.props.user
        let params=this.props.match.params
        let type

        params.type ? type= params.type: type= 'none'

        axios({
            method: "POST",
            url: apiUrl + "/gettasks",
            data:{
                status: type
            },
            headers:{
                "Authorization":`Bearer ${user.token}`
            }
        })
        .then((res)=>{
            this.setState(({...copyState})=>{
                copyState = res.data
                return copyState
            })
            console.log(this.state.tasks)
        })
        .catch(error=>console.error(error))
    }
    render() { 
        // console.log(this.state.tasks)
        // console.log(this.props.match.params.type)
        return ( 
            <div>
                <h1>Tasks:</h1>
                <ListGroup >
                    {this.state.tasks.map((task,index)=>( 
                    <TaskItem key={index} taskName={task.title} status={task.status} taskId={task._id} user={this.props.user} />
                    ))}
                  
                </ListGroup>

            </div>
         );
    }
}
 
export default withRouter(TaskList);