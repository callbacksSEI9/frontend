import React, { Component } from 'react'

class EmployeeForm extends Component {
     state = { 
        EmployeeForm={
        name:'',
        email:'',
        passord:'',
        passwordConfirmation:'',
        }
     }
    onChangeHandler = event =>{
        const name = event.target.name
        const value = event.target.value
        this.setState(({...copystate})=>{
            copystate.EmployeeForm[name]= value
            return copystate
        })}
        onSubmitHandler = event => {
          event.preventDefault()
          create(this.state.EmployeeForm)
          .then(res => (res.data))
          .catch(err => alert(err))
      }
    render() { 
        return ( 
            <form onSubmit={this.onSubmitHandler}>
            <label>Employee Name:</label>
            <input name="name" value={this.state.EmployeeForm.name} onChange={this.onChangeHandler}/>
            <br/><br/>
            <label>Employee Email:</label>
            <input name="email" value={this.state.EmployeeForm.email} onChange={this.onChangeHandler}/>
            <br/><br/>
            <label>Password:</label>
            <input name="password" value={this.state.EmployeeForm.password} onChange={this.onChangeHandler}/>
            <br/><br/>
            <label>Password Confirmation:</label>
            <input name="passwordConfirmation" value={this.state.EmployeeForm.passwordConfirmation} onChange={this.onChangeHandler} />
            <br/><br/>
            <input type="submit"/>
        </form>
         );
    }
}
 
export default EmployeeForm;