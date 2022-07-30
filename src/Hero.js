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
        <a className='speaker' href = "https://www.linkedin.com/in/kumar-shivam-9a5a94171/">Kumar Shivam</a>
        &
        <a className='speaker' href = "https://siddhant-k-code.github.io/">Siddhant Khare</a>
      </div>
      <span className='date'>{date}</span>
    </div>
  )
}
