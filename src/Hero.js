import React from 'react';
import './styles/hero.css';

export default function Hero() {
  const date = "12pm, 6th August 2022 (Saturday)";
  return (
    <div className='hero-container'>
      <div className='club-banner'>
        <span className='soss'>SOSS</span>
        <span className='techtalk'>Tech-talk</span>
      </div>
      <div className='collab'>X</div>
      <div className='speakers'>
        <span className='speaker'>Kumar Shivam</span>
        &
        <span className='speaker'>Siddhant Khare</span>
      </div>
      <span className='date'>{date}</span>
    </div>
  )
}
