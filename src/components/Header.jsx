import React from 'react';
import '../style/components/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  // ---
  return (
    <section className="Header">
      <div className='Header-wrapped'>
        <Link to='/'><div className='Header-logo' onClick={() => { scrollTop() }}></div></Link>
        <ul className="Header-menu">
          <li><Link to='cursos' onClick={() => { scrollTop() }}>Cursos </Link></li>
          <li> <Link to='market' onClick={() => { scrollTop() }}>Market</Link></li>
        </ul>
      </div>
    </section>
  )
}

export { Header }