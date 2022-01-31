import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate();
    const handleclick = (page) => {
        const navigatePage = (page === 'dashboard') ? navigate('/dashboard') : navigate('/profile')
    }

  return <>
    <button className="btn" onClick={() => handleclick('dashboard')}>Dashboard</button>
    <button className="btn" onClick={() => handleclick('profile')}>Profile</button>
  </>;
};

export default Navbar;
