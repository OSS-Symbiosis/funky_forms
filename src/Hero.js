import React from 'react';
import './styles/hero.css';

export default function Hero() {
  const date = "Friday, 5th August 2022";
  return (
    <div className='hero-container'>
        <h1>SOSS</h1>
        <h2>Tech-talk</h2>
        <p className='by'>by</p>
        <h2 id='speaker' >Kumar Shivam</h2>
        <h2 className='date'>{date}</h2>
    </div>
  )
}
