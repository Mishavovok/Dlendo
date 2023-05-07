import React from 'react';
import NavBar from './navBar/NavBar';
import Investors from './investors/Investors';
import './homeScreen.css';
import Portfolio from './portfolio/Portfolio';
import Interest from './interest/Interest';
import Deposit from './deposit/Deposit';
import Profitable from './profitable/Profitable';
import News from './news/News';

function HomeScreen() {
  return (
    <main className="homeScreen">
      <div className="homeScreen__nav">
        <NavBar />
      </div>
      <div className="homeScreen__investors">
        <Investors />
      </div>
      <div className="homeScreen__portfolio">
        <Portfolio />
      </div>
      <div className="homeScreen__interest">
        <Interest />
      </div>
      <div className="homeScreen__deposit">
        <Deposit />
        <Profitable />
        <News />
      </div>
      
    </main>
  );
}

export default HomeScreen;
