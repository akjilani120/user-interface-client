import React from 'react';
import {  Link, useNavigate } from "react-router-dom";
const Navbar = ({user, setUser}) => {
  const navigate = useNavigate()
  const handleLogOut =() =>{
    navigate("/profile")
  }
  const logOut =() =>{
    setUser(" ")
  }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
   
    
      <ul class="navbar-nav">
       
        <li class="nav-item">
          <Link className='nav-link' to="/">PIM</Link>
        </li>
        {user?<li class="nav-item">
          <Link  className='nav-link'  to="/login">Login</Link>
        </li>:<li class="nav-item">
          <button  onClick={handleLogOut}> {user?.name}   </button>
          <span onClick={logOut}>Log out</span>
        </li>}
       
       
      </ul>
    
  </div>
</nav>
    );
};

export default Navbar;