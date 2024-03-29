import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  //user logout
  const logout = () => {
    signOut(auth);
    // localStorage.removeItem('accessToken');
    navigate('/login');
  };

  return (
    <div className='mr-5 ml-5 lg:px-5'>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li className='text-xl'><a href='/'>Home</a></li>
              <li className='text-xl'><a href='/about'>About</a></li>
              <li className='text-xl'><a href='/contect'>Contect</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost text-error normal-case text-3xl">FOodZoNe</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li className='text-xl'><a href='/'>Home</a></li>
            <li className='text-xl'><a href='/about'>About</a></li>
            <li className='text-xl'><a href='/contect'>Contect</a></li>
          </ul>
        </div>
        <div class="navbar-end">
        {user ? <button className="btn btn-secondary"  onClick={logout} >Sign Out</button> : <Link to="/login" className='btn btn-secondary'>Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Header;