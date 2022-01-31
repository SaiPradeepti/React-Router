import React from 'react';
import { useParams, Outlet } from 'react-router-dom';

const Profile = () => {
    const {id} = useParams();
  return <>
  <div>{id}</div>  
  </>;
};

export default Profile;
