import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const managerView = (
  <Link to='/myemployees' />
)

const employeeView = (
  <Link to='/otheremployees' >Ohter Tasks</Link>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/"><i className="material-icons">home</i> Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <div>
    <aside className="nav">
      <img src='https://i.ibb.co/Npf74xt/app-logo1.png' className='logo'/>
      { user && <span>Welcome, {user.name}</span>}
      { alwaysOptions }
      { user ? (user.manager ? managerView : employeeView):''}
      { user ? authenticatedOptions : unauthenticatedOptions }
    </aside>
  </div>
)

export default Header
