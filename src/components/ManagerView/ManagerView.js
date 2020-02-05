import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './ManagerView.css'
import EmployeeForm from '../Employee/EmployeeForm'
import TaskList from '../task/Tasklist'
import TaskForm from '../task/FormTask'
import {Button} from 'react-bootstrap'

class ManagerView extends Component {
    state = { 
        Edisplay: 'none',
        Tdisplay: 'none'
        
     }


    componentDidMount() {

    }

    displayForm = ()=>{
        this.setState( {Edisplay: "block"})
    }
    closeForm = ()=>{
        this.setState( {Edisplay: "none"})
    }

    toggleForm = ()=>{
        if (this.state.Tdisplay == 'none'){
            this.setState( {Tdisplay: "block"})
        }
        else{
            this.setState( {Tdisplay: "none"})
        }
    }

    
    render() { 

        return (
            <div>
                <div id="addEmployee" >
                <Button variant="outline-success" id="taskButton"  onClick={this.toggleForm}>Add Task</Button>
                <Button variant="outline-primary" onClick={this.displayForm}>Add Employee</Button>
                </div>
                <div style={ {display: this.state.Tdisplay}}>
                <TaskForm  user={this.props.user} close={this.toggleForm}/>
                </div>
                <div className="Popup" style={ {display: this.state.Edisplay} }>
                    <div className="form">
                    <span className="close" onClick={this.closeForm}>&times;</span>
                    <EmployeeForm />
                    </div>
                </div>
                {/* <Chart /> */}
                <TaskList user={this.props.user} type={this.props.taskFilter} />
            </div>
          );
    }
}
 
export default ManagerView;