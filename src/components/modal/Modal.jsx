import React from 'react'
import '../../styles/modal.css';

const Modal = ({setModalOpen}) => {
  return (
    <div className="darkBG" onClick = {()=>{setModalOpen(false)}}>
      <div className = "centered">
        <div className = "modal">
          <div className="modalContent">
            See you there! 🚀
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal