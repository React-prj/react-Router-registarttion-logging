import './NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

import Searchbar from '../Search/Searchbar'

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='navbar'>

      <Link to='/account/home' className='brand'><h1>Home Recipes</h1> </Link>
      <Link to='/account/create' className='right-links'>Create </Link>
      <Searchbar />
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/login'>Sign in</Link>
      )}
    </div>
  );
};

export default Navbar;
