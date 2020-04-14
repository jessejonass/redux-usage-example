import React from 'react';
import { useSelector } from 'react-redux'; // Conecta redux com reducer
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './style.css';

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length);

  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo"/>
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas Reservas</strong>
          {/* <span>4 reservas</span> */}
          <span>{reserveSize} reservas</span>
        </div>
      </Link>
    </header>
  );
}
