import React, { Component } from 'react';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Dropdown from "react-bootstrap/Dropdown";
import axios from 'axios'
import apiUrl from '../../apiConfig'

class TaskItem extends Component {
    state = { 
      color: 'grey'
     }

    componentDidMount() {
      if(this.props.status == 'Complete'){
        this.setState({color:'green'})
      }
      else if(this.props.status == 'Inprogress'){
        this.setState({color:'orange'})
      }
    }

    makeItComplete=()=>{
        this.setState({color:'green'})
        this.updateStatus('Complete')
    }

    makeItQueued = ()=>{
      this.setState({color:'grey'})
      this.updateStatus('Queued')
    }

    makeItInProgress = () =>{
      this.setState({color:'orange'})
      this.updateStatus('Inprogress')
    }

    updateStatus = (status) =>{
      axios({
        url: apiUrl + `/tasks/${this.props.taskId}`,
        method: "patch",
        data:{
            task:{status: status}
        }, 
        headers:{
            "Authorization":`Bearer ${this.props.user.token}`
        }

    })
      .then(
          res => console.log(res.data)
      )
      .catch(
          err => alert(err)
      )
    }

    render() { 
        return ( <div>
 <ListGroupItem className="taskItem" style={ {boxShadow: `0 -5px ${this.state.color}` }}>
     <h3>{this.props.taskName}</h3>
     <Dropdown className="dropdown">
  <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
    Task Status
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item eventKey='1'onClick={this.makeItQueued}>Queued</Dropdown.Item>
    <Dropdown.Item eventKey='2'onClick={this.makeItInProgress}>In progress</Dropdown.Item>
    <Dropdown.Item eventKey='3'onClick={this.makeItComplete}>Complete</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
 </ListGroupItem>
        </div> );
    }
}
 
export default TaskItem;