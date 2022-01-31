import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import ProfilePage from './Pages/ProfilePage'
import Profile from './Pages/Profile'
import Navbar from './Pages/Navbar'
import ProfileData from './Pages/ProfileData';

const App = () => {
  return <>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/profile' element={<ProfilePage/>} >
        <Route path=':id' element={<Profile/>} />
        <Route path='data' element={<ProfileData/>} />
      </Route>
      <Route path='*' element={<p>Not Found</p>} />
    </Routes>  
  </BrowserRouter>
  </>;
};

export default App;
