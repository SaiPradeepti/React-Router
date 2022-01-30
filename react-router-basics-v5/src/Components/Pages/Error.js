import React from 'react';
import {Link} from 'react-router-dom'

const Error = () => {
  return <>
  <h1>Error Page</h1>
  <Link to='/' className="btn">Back to Home Page</Link>
  </>;
};

export default Error;
