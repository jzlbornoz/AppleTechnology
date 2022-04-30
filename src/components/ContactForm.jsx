import React from 'react';
import '../style/components/ContactForm.css';

const ContactForm = ({ setOpenModal }) => {
    const click = () => {
        setOpenModal(false);
    };
    return (
        <section className="ContactForm">
            <div className="Contact-wrapped">
                <button type='button' onClick={click} className='Contact-exit'><i class="fa-solid fa-xmark" /></button>
                <h2>Contactate con nosotros</h2>
                <textarea type="text" placeholder='Dejanos tu mensaje'/>
                <button type='button' className='Contact-send' onClick={click}>Enviar</button>
            </div>
        </section>
    )
}

export { ContactForm };