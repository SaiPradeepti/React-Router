import React from 'react';
import { Outlet } from 'react-router-dom';

const ProfilePage = () => {
  return <div>
      <h4>ProfilePage</h4>
      <Outlet/>
  </div>;
};

export default ProfilePage;
