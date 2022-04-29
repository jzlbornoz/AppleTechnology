import React from 'react';
import { Landing } from '../components/Landing';
import { Location } from '../components/Location';
import { Support } from '../components/Support';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import '../style/containers/Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <Landing />
      <Location />
      <Support />
      <WhatsAppIcon />
    </div>
  )
}

export { Home }