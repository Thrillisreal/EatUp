import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav({ authenticated, user, handleLogOut }) {
  // let authenticatedOptions

  // if (user) {
  //   authenticatedOptions = (
  //     <nav>
  //       <h3>Welcome {user.email}!</h3>
  //       <NavLink onClick={handleLogOut} to="/">
  //         Sign Out
  //       </NavLink>
  //     </nav>
  //   )
  // }

  // const publicOptions = (
  //   <nav>
  //     <NavLink to="/">Home</NavLink>
  //     <NavLink to="/register">Register</NavLink>
  //     <NavLink to="/signin">Sign In</NavLink>
  //   </nav>
  // )

  return (
    <header>
      {/* <NavLink to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://avatars.dicebear.com/api/gridy/app.svg"
            alt="welcome banner"
          />
        </div>
      </NavLink>
      {authenticated && user ? authenticatedOptions : publicOptions} */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/myorders">My Orders</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
      </nav>
    </header>
  )
}
