import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './../provider/AuthProvider';

const Navbar = ({name,photo}) => {
  const {user,logOut}=useContext(AuthContext)
  const handelLogOut=()=>{
    logOut()
    .then()
    .catch()
  }


  const navLink=<>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/about'>About</NavLink></li>
  <li><NavLink to='/contract'>Contract Us</NavLink></li>
  <li><NavLink to='/blogs'>Blogs</NavLink></li>
  </>
  return (
      <div className=" bg-green-100">
      <div className='navbar container mx-auto '>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
            {
             user&&
              <>
              <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
            <li><NavLink to='/userProfile'>userProfile </NavLink></li>
              </>
            }
          </ul>
        </div>
      <Link to={'/'} className="btn btn-ghost gap-0 font-bold text-xl">Asia<span className="text-green-500">Explorer</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
          {
             user&&
              <>
              <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
            <li><NavLink to='/userProfile'>user Profile </NavLink></li>
              </>
            }
          
        </ul>
      </div>
      <div className="navbar-end">
        {
          user? <div className='flex'>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
         <div title={user.displayName||name} className="w-10  rounded-full">
            <img alt="Tailwind CSS Navbar component" src={user.photoURL||photo||"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}/>
          </div>
         </div>
          <button onClick={handelLogOut} className='btn'>Logout</button>
        </div>:<div><Link to={'/login'} className="btn bg-green-300 font-bold">Login</Link>
        <Link to={'/register'} className="btn bg-green-300 font-bold"> Register</Link>
        </div>
        }
      </div>
      </div>
    </div>
  );
};

export default Navbar;