import React from 'react';
import user from '/src/assets/user.png';
import gear from '/src/assets/gear.png';
import bell from '/src/assets/bell.png';
import scales from '/src/assets/scales.png';
import payment from '/src/assets/pending.png';
import funded from '/src/assets/funded.png';
import pending from '/src/assets/pending.png';
import './profile.css';
function Profile() {
  return (
    <section className="profile">
      <div className="profile__options">
        <img className="profile__options-img" src={scales} alt="" />
        <img className="profile__options-img  profile__options-img-active" src={gear} alt="" />
        <img className="profile__options-img" src={bell} alt="" />
      </div>
      <div className="profile__user">
        <img src={user} alt="" />
        <h4 className="profile__user-name">Misha Vovk</h4>
      </div>
      <div className="profile__balance">
        <div className="profile__balance-item">
          <img className='profile__balance__item-img' src={payment} alt="" />
          <p className='profile__balance__item-balance'>Balance</p>
          <p className='profile__balance__item-number'>€ 102394</p>
        </div>
        <div className="profile__balance-item">
          <img className='profile__balance__item-img' src={funded} alt="" />
          <p className='profile__balance__item-balance'>Funded</p>
          <p className='profile__balance__item-number'>€ 5394</p>
        </div>
        <div className="profile__balance-item">
          <img className='profile__balance__item-img' src={pending} alt="" />
          <p className='profile__balance__item-balance'>Pending</p>
          <p className='profile__balance__item-number'>€ 62394</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
