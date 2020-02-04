import React, { Component } from 'react';
import TaskList from '../task/Tasklist'
import {Route} from 'react-router-dom'

class EmployeeView extends Component {
    state = {  }
    render() { 
        const navbar = (<div>

        </div>)
        return ( 
            <div>
                <Route path='/' exact={()=> 
                <TaskList user={this.props.user} />    
            } />
                
            </div>
         );
    }
}
 
export default EmployeeView;