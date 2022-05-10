import React from 'react';
import '../style/components/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="Header">
      <div className='Header-wrapped'>
        <Link to='/'><div className='Header-logo'></div></Link>
        <Link to='cursos'><p>Cursos</p></Link>
        <Link to='market'><p>Market</p></Link>
      </div>
    </section>
  )
}

export { Header }