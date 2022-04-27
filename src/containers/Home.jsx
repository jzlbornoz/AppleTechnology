import React from 'react';
import { Landing } from '../components/Landing';
import { Location } from '../components/Location';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import '../style/containers/Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <Landing />
      <Location />
      <WhatsAppIcon />
    </div>
  )
}

export { Home }