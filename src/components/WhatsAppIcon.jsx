import React from 'react';
import '../style/components/WhatsAppIcon.css';

const WhatsAppIcon = () => {
  return (
    <div className="WhatsAppIcon">
        <a href="https://api.whatsapp.com/send?phone=584121284000&text=Hola,%20Quiero%20mi%20servicio">
          <i className="fa-solid fa-phone fa-2xl" />
          </a>
    </div>
  )
};

export { WhatsAppIcon };