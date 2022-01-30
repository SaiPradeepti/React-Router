import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Person from './Components/Pages/Person'
import People from './Components/Pages/People'
import Error from './Components/Pages/Error'
import Navbar from './Components/Pages/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/people'><People /></Route>
          <Route path='/person/:id' children={<Person/>}></Route>
          <Route path='*'><Error /></Route>
        </Switch>
    </Router>
    );
};

export default App;
