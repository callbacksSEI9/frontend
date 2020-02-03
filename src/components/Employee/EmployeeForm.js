import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp } from '../../auth/api'
import messages from '../../auth/messages'

class EmployeeForm extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert } = this.props

    signUp(this.state)
    //   .then(() => signIn(this.state))
    //   .then(res => setUser(res.data.user))
      .then(() => alert(messages.addEmployeeSuccess, 'success'))
    //   .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert(messages.addEmployeeFailure, 'danger')
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <form className='auth-form' onSubmit={this.onSignUp}>
        <h3>Add New Employee</h3>

        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default withRouter(EmployeeForm)
