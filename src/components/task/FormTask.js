import React, { Component } from 'react';
import axios from 'axios'
import apiUrl from '../../apiConfig'
import {withRouter} from 'react-router-dom'
class FormTask extends Component {
    state = { 
        FormTask:{
        title:'',
        text:'',
        time:''
        }
     }
    
    onChangeHandler = event =>{
        const name = event.target.name
        const value = event.target.value
        this.setState(({...copystate})=>{
            copystate.FormTask[name]= value
            return copystate
        })}
        
        onSubmitHandler = event => {
          event.preventDefault()
        //   console.log(this.props.user.token)
          axios({
            url: apiUrl + "/tasks",
            method: "post",
            data:{
                task: this.state.FormTask
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
        return ( 
            <div>
  <form onSubmit={this.onSubmitHandler}>
            <label>Task title :</label>
            <input name="title" value={this.state.FormTask.title} onChange={this.onChangeHandler}/>
            <br/><br/>
            <label> Text:</label>
            <input name="text" value={this.state.FormTask.text} onChange={this.onChangeHandler}/>
            <br/><br/>
            <label> Deadline:</label>
            <input name="time" value={this.state.FormTask.time} onChange={this.onChangeHandler} type="date" />
           
            <br/>
            <input type="submit"/>
        </form>
                
            </div>
         );
    }
}
 
export default withRouter (FormTask);