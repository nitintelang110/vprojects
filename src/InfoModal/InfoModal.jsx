import React from 'react'
import './InfoModal.css'

const InfoModal = ({description}) => {
  return (
    <div className='modal_container'>{description}</div>
  )
}

export default InfoModal;