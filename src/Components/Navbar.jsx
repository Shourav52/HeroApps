import React from 'react' 
import logo from '../assets/logo.png'
import git from '../assets/git.png'
import { Link, NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm pl-10 pr-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <NavLink to='/'>Home</NavLink>
          </li>
        <li>
          <NavLink to='/allapps'>Apps</NavLink>
          </li>
        <li>
          <NavLink to='/installation'>Installation</NavLink>
          </li>
        
      </ul>
    </div>
    <img className='w-[30px] h-[30px]' src={logo} alt="" />
    <Link to='/' className="btn btn-ghost text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
          <NavLink to='/'>Home</NavLink>
          </li>
        <li>
          <NavLink to='/allapps'>Apps</NavLink>
          </li>
        <li>
          <NavLink to='/installation'>Installation</NavLink>
          </li>
    </ul>
  </div>
  <div className="navbar-end">
    
    <Link to='https://github.com/Shourav52' className="btn  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
    <img  src={git} alt="" />
    Contribute</Link>
  </div>
</div>
  )
}

export default Navbar
