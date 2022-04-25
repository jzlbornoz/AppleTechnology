import React from 'react';
import { Landing } from '../components/Landing';
import { Location } from '../components/Location';
import '../style/containers/Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <Landing />
      <Location />
    </div>
  )
}

export { Home }