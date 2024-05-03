import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './../provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import { Fade } from "react-awesome-reveal";


const Navbar = ({name,photo}) => {
  const {user,logOut}=useContext(AuthContext)

  // State to manage the current theme
  const [theme, setTheme] = useState(() => {
    // Check if theme preference is stored in local storage
    const storedTheme = localStorage.getItem('theme');
    // Return stored theme or 'light' if no preference is found
    return storedTheme ? storedTheme : 'light';
  });
  

  // Update the theme preference in local storage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme)
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
          setTheme('dark')
        } else {
          setTheme('light')
        }
   
  };

  const handelLogOut=()=>{
    logOut()
    .then()
    .catch()
  }


  const navLink=<>
  
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/AllTouristsSpot'>All Tourists Spot</NavLink></li>
  <li><NavLink to='/AddTouristsSpot'>Add Tourists Spots</NavLink></li>
  <li><NavLink to='/MyList'>My List</NavLink></li>
  </>
  return (
      <div className=" bg-green-100 dark:bg-[2a303c]">
      <div className='navbar container mx-auto '>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
            
          </ul>
        </div>
      <Link to={'/'} className="btn btn-ghost gap-0 font-bold 
      text-xl"> Asia<span className="text-green-500">Explorer</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
          
          
        </ul>
      </div>
      <div className="navbar-end">
      <label className='cursor-pointer grid place-items-center'>
          <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
        {
          user? <div className='flex'>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
         <div className="w-10  rounded-full">
         <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content={user.displayName||name}
        data-tooltip-variant="success"
      >
            <img alt="Tailwind CSS Navbar component" src={user.photoURL||photo||"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}/>
      </a>
      <Tooltip id="my-tooltip" />
          </div>
         </div>
          <button onClick={handelLogOut} className='btn bg-green-400 text-white'>Logout</button>
        </div>:<div><Link to={'/login'} className="btn bg-green-400 text-white font-bold">Login</Link>
        <Link to={'/register'} className="btn bg-green-400 text-white font-bold"> Register</Link>
        </div>
        }
      </div>
      </div>
    </div>
  );
};

export default Navbar;