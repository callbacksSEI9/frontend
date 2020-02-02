import React, { Component } from 'react';
import { Route } from 'react-router-dom'

class ManagerView extends Component {
    state = {  }
    render() { 

        const navbar = (<aside>

                        </aside>)

        return (
            <div>
            {navbar}
            <Route path='/' render={()=> navbar} />
            <Route path='/' exact render={()=> 
                <div>
                <TaskForm />
                <EmployeeForm />
                <Chart />
                <TastList user={this.props.user} />
                </div>
            } />
            </div>
          );
    }
}
 
export default ManagerView;