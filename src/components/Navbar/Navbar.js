import React from 'react';
import { Link, NavLink } from 'react-router-dom';
 

const Navbar = () => {

//      const active =
//     "text-white mx-1 font-medium border-b-2 border-white-900 pb-1 md:text-white-900 ";
//   const normal =
//     "  mx-1 text-white-600 font-medium font-bold focus:text-white p-0 lg:text-white   ";
//     const navItem = (
//      <>
//        <li className="nav-item p-2 	">
//          <NavLink
//            className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
//            to="/home"
//          >
//            Home
//          </NavLink>
//        </li>
        
       
//        <li className="nav-item p-2 	">
//          <NavLink
//            className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
//            to="/news-media"
//          >
//            News & Media
//          </NavLink>
//        </li>
//        <li className="nav-item p-2 	">
//          <NavLink
//            className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
//            to="/career"
//          >
//            Career
//          </NavLink>
//        </li>
//        <li className=" nav-item  p-2   	">
//          <NavLink
//            className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
//            to="/gallery"
//          >
//            Gallery
//          </NavLink>
//        </li>
//        <li className="nav-item p-2 	">
//          <NavLink
//            className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
//            to="/about"
//          >
//            About us
//          </NavLink>
//        </li>
 
//        <li className="nav-item p-2 	">
//          <NavLink
//            className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
//            to="/contact"
//          >
//            Login
//          </NavLink>
//        </li>
//      </>
//    );
const liItems = (
     <>
       <li>
         <Link to="/">Home</Link>
       </li>
       {/* <li>
         <Link to="/appoinment">Appoinment</Link>
       </li> */}
 
       <li>
         <Link to="/review">Reviwes</Link>
       </li>
       <li>
         <Link to="/about">About</Link>
       </li>
       
       <li>
          
           <Link to="/login">Login</Link>
         
       </li>
       
     </>
   );
     return (
     //      <div className='sticky top-0 z-50'>
           
     //       <div className="navbar bg-[#123261] " >
     //    <div className="navbar-start">
     //      <div className="dropdown">
     //        <label tabIndex={0} className="btn btn-ghost lg:hidden">
     //          <svg
     //            xmlns="http://www.w3.org/2000/svg"
     //            className="h-5 w-5"
     //            fill="none"
     //            viewBox="0 0 24 24"
     //            stroke="currentColor"
     //          >
     //            <path
     //              strokeLinecap="round"
     //              strokeLinejoin="round"
     //              strokeWidth="2"
     //              d="M4 6h16M4 12h8m-8 6h16"
     //            />
     //          </svg>
     //        </label>
     //        <ul
     //          tabIndex={0}
     //          className="menu menu-compact dropdown-content mt-3 p-2 shadow   w-52"
     //        >
     //          {navItem}
     //        </ul>
     //      </div>
     //      <a className="btn btn-white normal-case text-xl">My House</a>
     //      {/* <div className="flex justify-items-center items-center gap-2 ">
     //        <p style={{color:"#707070"}}>Follow Us</p>
     //      <a href='' ><FaFacebookSquare className="text-lg ml-2 text-white" /></a>
     //      <a href='' >  <BsLinkedin className="text-lg ml-2 text-white" /></a>
     //      <a href=''><TiSocialTwitter className="text-lg ml-2 text-white" /></a>
     //      <a href=""><TiSocialInstagram className="text-lg ml-2 text-white" /></a>
        
          
          
     //      </div> */}
     //    </div>
     //    <div className="navbar-center hidden lg:flex">
     //      <ul className="  menu-horizontal p-0">{navItem}</ul>
     //    </div>
     //    {/* <div className="navbar-end">
     //      <a className="btn">Get started</a>
     //    </div> */}
     //  </div> 
     //    </div>
     <div className="navbar shadow-lg " >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {liItems }
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"> MY HOUSE</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{liItems}</ul>
      </div>
      <div className="navbar-end">

      <label for="my-drawer" tabindex="1" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
   
      <div className="dropdown dropdown-hover">
  <label tabIndex={0} className="btn m-1">My Profile</label>
  <ul tabIndex={0} className="dropdown-content menu p-2  bg-base-100 rounded-box w-22">
    <li><a>Settings</a></li>
    <li><a>Logout</a></li>
  </ul>
</div>

      </div>
    </div>
     );
};

export default Navbar;