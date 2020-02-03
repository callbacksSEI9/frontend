import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './ManagerView.css'
import EmployeeForm from '../Employee/EmployeeForm'
import TaskList from '../task/Tasklist'

class ManagerView extends Component {
    state = { 
        taskFilter: 'none'
     }


    componentDidMount() {

    }

    changeTastFiler = (event)=>{
        const task = event.target.innerHTML
        this.setState({taskFilter:task})
    }
    
    render() { 

        return (
            <div>
            <Route path='/' exact render={()=> 
                <div>
                {/* <TaskForm /> */}
                <EmployeeForm />
                {/* <Chart /> */}
                <TaskList user={this.props.user} type={this.state.taskFilter} />
                </div>
            } />
            </div>
          );
    }
}
 
export default ManagerView;