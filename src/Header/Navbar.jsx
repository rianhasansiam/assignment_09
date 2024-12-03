 

import { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { contextData } from '../Contex'
import AOS from 'aos'
import 'aos/dist/aos.css'
import  logo from "../assets/logo.png"

const Navbar = () => {
    

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, 
    })
  }, [])

const {logOutHandle,userData,displayName,photoUrl}=useContext(contextData)





    

 

  return (

   <>
   
    <div className="navbar bg-base-100 container mx-auto py-7">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
       <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/startlearning">Start Learning</NavLink></li>
        <li><NavLink to="/tutorial">Tutorals</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink> </li>
        {userData && <li><NavLink to="/myprofile">My Profile</NavLink></li> }
      </ul>
    </div>

  
    {userData?<img className='w-[40px]  h-[40px] rounded-full mr-3 md:hidden' src={photoUrl} alt="" />:''}
   
    <p className="btn btn-ghost text-xl  text-[#4a90e2] font-bold "> <img className='w-[30px] h-[30px] rounded-full' src={logo} alt="" />Lingo Bingo</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/startlearning">Start Learning</NavLink></li>
        <li><NavLink to="/tutorial">Tutorals</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink> </li>

        {userData && <li><NavLink to="/myprofile">My Profile</NavLink></li> }
        
    </ul>
  </div>
  <div className="navbar-end">

    {
      userData?<div className='flex  flex-col-reverse md:flex-row gap-5 items-center '>

        <div className=' items-center gap-2 hidden md:flex flex-wrap'>
        <img className='w-[40px]  h-[40px] rounded-full' src={photoUrl} alt="" />
        <div>
        <h1 className='font-semibold'>Welcome! <i className="fa-solid fa-meteor text-orange-400"></i></h1>
        <h1 className=' font-semibold' data-aos="fade-left">{displayName}</h1>
        </div>
    
        </div>

        <Link onClick={logOutHandle} to='/' className="btn bg-red-400 text-xl text-white relative z-10">LogOut</Link>
      </div>
      :
      <Link to='/login' className="btn bg-[#4a90e2] text-xl text-white">LogIn</Link>
    }
    
   
  </div>
  
</div>
        {userData?<div className='flex gap-5 justify-center py-5 md:hidden'>
        <h1 className='font-semibold'>Welcome! <i className="fa-solid fa-meteor text-orange-400"></i></h1>
        <h1 className=' font-semibold' data-aos="fade-left">{displayName}</h1>
        </div>:''}
   </>
  )
}



export default Navbar