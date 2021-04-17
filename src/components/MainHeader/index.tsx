import React from 'react';
import Logo from '../../assets/logo.svg'; 
import './styles.css';

const MainHeader: React.FC = () => (
  <header className="main-header">
    <div className="container">
      <h1 className="mh-logo">
      <img src={Logo} alt="GoFinances" />
      </h1>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/signup">Cadastro</a>
          </li>
          <li>
            <a href="/">Lançamentos</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default MainHeader;