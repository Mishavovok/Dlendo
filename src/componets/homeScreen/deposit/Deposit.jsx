import React, { useEffect, useState } from 'react';
import ItemUser from './ItemUser';
import './deposit.css';
import left from '../../../assets/left-arrow.png';
import right from '../../../assets/right-arrow.png';

function Deposit() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://644e7d724e86e9a4d8fa22f8.mockapi.io/crypto')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <section className="deposit">
      <h1>Deposit / Withdrawal</h1>
      <p>Recent / withdrawl crypto transactions</p>
      <div className="deposit__background">
        <div className='deposit__scroll'>
          <div className="deposit__info">
            <h1>Data</h1>
            <h1>Username</h1>
            <h1>Action</h1>
            <h1>Amount (fiat)</h1>
            <h1>Amount (Crypto)</h1>
            <h1>Transaction link</h1>
          </div>
          {items.map((obj) => (
            <ItemUser key={obj.id} {...obj} />
          ))}
        </div>

        <p className="deposit__latest">Latest actions (Showing 01 to 06 of 765)</p>
        <div className="deposit__page">
          <p className="arrow__radius">
            <img className="arrow__radius-img" src={left} alt="" />
          </p>
          <p className="deposit__page-number number-activ">1</p>
          <p className="deposit__page-number">2</p>
          <p className="deposit__page-number">4</p>
          <p className="deposit__page-number">...</p>
          <p className="deposit__page-number">12</p>

          <p className="arrow__radius">
            <img className="arrow__radius-img" src={right} alt="" />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Deposit;
