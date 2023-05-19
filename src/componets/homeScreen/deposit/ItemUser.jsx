import React, { useState } from 'react';
import './deposit.css';
import calendar from '../../../assets/calendar.png';
import amounimg from '../../../assets/amount.png';
import i from '../../../assets/i.png';
import link from '../../../assets/link.png';
import germany from '../../../assets/germany-323332.png';

function ItemUser({ data, nane, action, amount, amountImg, amountTitle, amountText, transaction }) {
  const typeAction = ['Deposit', 'Withdrawal'];
  const [activ, setActiv] = useState(0);
  return (
    <div className="deposit__item">
      <div className="deposit__item-data">
        <img className="deposit__item-data-img" src={calendar} alt="" />
        <p className="deposit__item-data-number">{data}</p>
      </div>
      <div className="deposit__item-user">
        <img className="deposit__item-user-img" src={germany} alt="" />
        <p className="deposit__item-user-text">{nane}</p>
      </div>
      <div className="deposit__item-action">
        {action.map((id) => (
          <p
            className={
              activ === id ? 'deposit__item-action-text ' : 'deposit__item-action-text-color'
            }
            key={id}>
            {typeAction[id]}
          </p>

        ))}
      </div>
      <div className="deposit__item-amount">
        <img className='deposit__item-amount-img' src={amounimg} alt="" />
        <p className="deposit__item-amount-text">{amount}</p>
      </div>
      <div className="deposit__item-crypto">
        <img className="deposit__item-crypto-img" src={amountImg} alt="" />
        <div>
          <p className="deposit-color">{amountTitle}</p>
          <p className="deposit__item-crypto-text">{amountText}</p>
        </div>
      </div>
      <div className="deposit__item-transaction">
        <img className="deposit__item-transaction-img" src={link} alt="" />
        <p className="deposit__item-transaction-text">{transaction}</p>
        <img className="deposit__item-transaction-img" src={i} alt="" />
      </div>
    </div>
  );
}

export default ItemUser;
