import React from 'react';
import '../style/components/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="Header">
      <div className='Header-wrapped'>
        <Link to='/'><div className='Header-logo'></div></Link>
        <ul className="Header-menu">
          <li><Link to='cursos'>Cursos </Link></li>
          <li> <Link to='market'>Market</Link></li>
        </ul>
      </div>
    </section>
  )
}

export { Header }