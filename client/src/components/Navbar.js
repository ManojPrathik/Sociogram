import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = ()=>{
    return(
        <nav>
    <div className="nav-wrapper #aa00ff purple accent-4">
      <Link to="/" className="brand-logo left">Sociogram</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Sign-up</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/create">Post</Link></li>
      </ul>
    </div>
  </nav>
    )
}
export default NavBar