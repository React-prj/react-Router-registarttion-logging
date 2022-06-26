import './NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

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
        <Link to='/account/receipe' className='right-links'>Recipies</Link>
        <Link to='/account/search' className='right-links'>Search </Link>
        {user?.displayName ? (
          <button onClick={handleSignOut}>Logout</button>
        ) : (
          <Link to='/login'>Sign in</Link>
        )}        
    </div>
  );
};

export default Navbar;
