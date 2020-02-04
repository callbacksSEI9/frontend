import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './ManagerView.css'
import EmployeeForm from '../Employee/EmployeeForm'
import TaskList from '../task/Tasklist'

class ManagerView extends Component {
    state = { 
        taskFilter: 'none',
        display: 'none'
     }


    componentDidMount() {

    }

    changeTastFiler = (event)=>{
        const task = event.target.innerHTML
        this.setState({taskFilter:task})
    }

    displayForm = ()=>{
        this.setState( {display: "block"})
    }
    closeForm = ()=>{
        this.setState( {display: "none"})
    }
    
    render() { 

        return (
            <div>
                {/* <TaskForm /> */}
                <button id="addEmployee" onClick={this.displayForm}>Add Employee</button>
                <div className="Popup" style={ {display: this.state.display} }>
                    <div className="form">
                    <span classname="close" onClick={this.closeForm}>&times;</span>
                    <EmployeeForm />
                    </div>
                </div>
                {/* <Chart /> */}
                <TaskList user={this.props.user} type={this.state.taskFilter} />
            </div>
          );
    }
}
 
export default ManagerView;