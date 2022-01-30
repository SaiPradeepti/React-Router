import React, { useState, useEffect } from 'react';
import { peopleData } from '../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const {id} = useParams();
  const [name,setName] = useState('');
  
  useEffect(() => {
    const newPerson = peopleData.filter(item => item.id === parseInt(id));
    console.log(newPerson[0].name)
    setName(newPerson[0].name)
  }, [])
  console.log(name)
  return (
    <div>
      <h2>person</h2>
      <h4>{name}</h4>
      <Link to='/people' className='btn'>Back to People</Link>
    </div>
  );
};

export default Person;