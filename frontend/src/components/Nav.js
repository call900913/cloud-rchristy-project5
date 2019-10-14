import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "../react-auth0-wrapper";

const Nav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  if (!isAuthenticated) {
    return (
      <button
        onClick={() =>
          loginWithRedirect({})
        }
      >
        Log in
      </button>
    )
  }
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            Post a Question
          </NavLink>
        </li>
        { (this.props.user)
            ? <li className='loggedinuser'>You are logged in as: {this.props.user}</li>
            : <li>You are not currently logged in as any user.</li>}
        <li>
          <button onClick={() => logout()}>Log out</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav



/*
<div>
  <form>
    <label htmlFor="username">Username: </label>
    <input
      id="username"
      name="username"
      type="text"
      value={username}
      onChange={this.handleInputChange}
    />
    <hr></hr>
    <label htmlFor="email">Email: </label>
    <input
      id="email"
      name="email"
      type="text"
      value={email}
      onChange={this.handleInputChange}
    />
    <hr></hr>
    <label htmlFor="password">Password: </label>
    <input
      id="password"
      name="password"
      type="password"
      value={password}
      onChange={this.handleInputChange}
    />
    <button onClick={this.signup}>Sign Up</button>
  </form>
</div>


 */