import React from 'react'
import './styles/NotFound.css'

export default function NotFound() {
  const solutions = [{ key: 0, desc: "Check if you have typed the correct URL." }, { key: 1, desc: "Contact the person who shared the URL with you." }]
  return (
    <div className='not-found-container'>
      <h1 className='err-title'>404!</h1>
      <p className='url-message'>
        The URL you are trying to visit doesn't exist.
        <ol className='solution-list'>
          {solutions.map(solution =>
            <li className='list-item' key={solution.key}>{solution.desc}</li>
          )}
        </ol>
      </p>
    </div>
  )
}
