import React from 'react'
import './../../styles/modal.css'

const Modal = ({ setModalOpen }) => {
  return (
    <div className="darkBG" onClick={() => { setModalOpen(false) }}>
      <div className="centered">
        <div className="modal">
          <div className="modalContent">
            <div className='modalHeading'>
              Form submitted.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal