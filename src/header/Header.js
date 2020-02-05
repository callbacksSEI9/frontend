import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password"><i className="material-icons">loop</i> Change Password</Link>
    <Link to="/sign-out"><i className="material-icons">exit_to_app</i> Sign Out</Link>
  </React.Fragment>
)

const managerView = (
  <React.Fragment>
  <Link to='/emp' ><i className="material-icons">people</i> My Employees</Link>
  </React.Fragment>
)

const employeeView = (
  <Link to='/otheremployees' ><i className="material-icons">developer_board</i> Ohter Tasks</Link>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up"><i className="material-icons">person_add</i> Sign Up</Link>
    <Link to="/sign-in"><i className="material-icons">input</i> Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/"><i className="material-icons">home</i> Home</Link>
  </React.Fragment>
)

const Header = ({ user,changeTaskFiler }) => (
  <div>
    <aside className="nav">
      <img src='https://i.ibb.co/Npf74xt/app-logo1.png' className='logo'/>
      { alwaysOptions }
      { user ? (user.manager ? managerView:employeeView ):''}
      { user ? <Link to='/' onClick={changeTaskFiler}><i className="material-icons">date_range</i> Queued</Link>: ''}
      { user ? <Link to='/' onClick={changeTaskFiler}><i className="material-icons">event_note</i> In progress</Link>: ''}
      { user ? <Link to='/' onClick={changeTaskFiler}><i className="material-icons">event_available</i> Complete</Link>: ''}
      { user ? authenticatedOptions : unauthenticatedOptions }
    </aside>
  </div>
)

export default Header
