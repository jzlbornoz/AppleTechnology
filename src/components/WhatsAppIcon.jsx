import React from 'react';
import '../style/components/WhatsAppIcon.css';

const WhatsAppIcon = ({setOpenModal}) => {
  const click = () =>{
    setOpenModal(prevState => !prevState)
  }
  return (
    <div className="WhatsAppIcon" onClick={click}>
          <i className="fa-solid fa-phone fa-2xl" />
    </div>
  )
};

export { WhatsAppIcon };