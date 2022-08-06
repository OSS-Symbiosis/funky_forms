import React from 'react'
import './styles/NotFound.css'

export default function NotFound() {
  const solutions = [{ key: 0, desc: "Check if you have typed the correct URL." }, { key: 1, desc: "Contact us." }]
  return (
    <div className='not-found-container'>
      <h1 className='err-title'>404!</h1>
      <p className='url-message'>
        The URL you are trying to visit either doesn't exist or is temporarily down.
        <ol className='solution-list'>
          {solutions.map(solution =>
            <li className='list-item' key={solution.key}>{solution.desc}</li>
          )}
        </ol>
      </p>
      <a href="mailto:siddharth.siddharth.btech2020@sitpune.edu.in?cc=akash.singh.btech2020@sitpune.edu.in" className='contact-btn'>Contact Us</a>
    </div>
  )
}
