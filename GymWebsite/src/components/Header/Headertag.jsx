import React from 'react';
import Boyfight from '../../assets/images/Boyfight.webp';
import weights from '../../assets/images/weights.webp';
import treadmill from '../../assets/images/treadmill.webp';
import abs from '../../assets/images/abs.webp';
import contract from '../../assets/images/contract.webp';
import open_sign from '../../assets/images/open_sign.webp';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Headertag() {
  return (
    <header className='diagonal-header'>
      <div className='header-half black-half'> 
        <h1 className='tagline'>
            Welcome to <span style={{color:'red',}}>The infantry </span> by <span style={{fontStyle:'italic'}}>Mac</span>  <br />
        </h1>
        <h1 className='come-join-us'>
        Join us <span style={{color:'green'}}>TODAY!</span>
        </h1>
      </div>

      <div className='header-half image-half'>
        <img src={Boyfight} alt='boy fighting' className='header-image' loading="lazy" />
      </div>

      <div className='feature-box'>
        <div className='feature-item'>
          <img className='feature-image' src={open_sign} alt='24/7 open sign' loading="lazy" />
          <p className='feature-description'>
            OPEN 24/7
          </p>
        </div>
        <div className='feature-item'>
          <img className='feature-image' src={abs} alt='abs' loading="lazy" />
          <p className='feature-description'>
            CORE
          </p>
        </div>
        <div className='feature-item'>
          <img className='feature-image' src={weights} alt='weights' loading="lazy" />
          <p className='feature-description'>
            WEIGHTS
          </p>
        </div>
        <div className='feature-item'>
          <img className='feature-image' src={treadmill} alt='treadmill' loading="lazy" />
          <p className='feature-description'>
            CARDIO
          </p>
        </div>
        <div className='feature-item'>
          <img className='feature-image' src={contract} alt='no contract sign' loading="lazy" />
          <p className='feature-description'>
            NO CONTRACT!
          </p>
        </div>
      </div>
      

    </header>
  );
}
