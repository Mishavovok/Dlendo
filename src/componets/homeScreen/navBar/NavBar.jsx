import React from 'react';
import Profile from '../profile/Profile';
import logo from '../../../assets/logo.png';
import dashboard from '../../../assets/dashboard.png';
import portfolio from '../../../assets/portfolio.png';
import myportfolio from '../../../assets/mywallet.png';
import mywallet from '../../../assets/mywallet.png';
import partnership from '../../../assets/partnership.png';
import server from '../../../assets/server.png';
import question from '../../../assets/question.png';
import email from '../../../assets/email.png';
import facebook from '../../../assets/facebook.png';
import dlendo from '../../../assets/dlendo.png';

import './navbar.css';

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img className="nav__logo-img" src={logo} alt="" />
        <h1 className="nav__logo-text">Dlendo</h1>
      </div>
      <Profile />
      <h2 className="nav__panel">user panel</h2>
      <section className="nav__menu">
        <div className="nav__link">
          <img className="nav__link-img" src={dashboard} alt="" />
          <p>Dashboard</p>
        </div>
        <div className="nav__link nav__link-active">
          <img className="nav__link-img " src={portfolio} alt="" />
          <p>Dlendo portfolio</p>
        </div>
        <div className="nav__link">
          <img className="nav__link-img" src={myportfolio} alt="" />
          <p>My portfolio</p>
        </div>
        <div className="nav__link">
          <img className="nav__link-img" src={mywallet} alt="" />
          <p>My wallet</p>
        </div>
        <div className="nav__link">
          <img className="nav__link-img" src={partnership} alt="" />
          <p>Partnership</p>
        </div>
        <div className="nav__link">
          <img className="nav__link-img" src={server} alt="" />
          <p>Company news</p>
        </div>
      </section>
      <h2 className="nav__panel">homepage</h2>
      <section className="nav__menu">
        <div className="nav__link">
          <img className="nav__link-img" src={dlendo} alt="" />
          <p>Dlendo</p>
        </div>
        <div className="nav__link">
          <img className="nav__link-img-question" src={question} alt="" />
          <p>FAQ</p>
        </div>
      </section>
      <h2 className="nav__panel">support</h2>
      <section className="nav__menu">
        <div className="nav__link">
          <img className="nav__link-img" src={email} alt="" />
          <p>Support@dlendo.com</p>
        </div>
        <div className="nav__link">
          <img className="nav__link-img" src={facebook} alt="" />
          <p>Facebook</p>
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
