import React, { useState } from 'react';
import '../style/components/ContactForm.css';

const ContactForm = ({ setOpenModal }) => {
    const click = () => {
        setOpenModal(false);
    };
    const [messege, setMessege] = useState('');
    const onChange = (event) => {
        setMessege(event.target.value);
    };
    const api = `https://api.whatsapp.com/send?phone=584121284000&text=${messege}`;

    return (
        <section className="ContactForm">
            <div className="Contact-wrapped" data-aos="fade-up">
                <button type='button' onClick={click} className='Contact-exit'><i className="fa-solid fa-xmark" /></button>
                <h2>Contactate con nosotros</h2>
                <textarea type="text" placeholder='Dejanos tu mensaje' value={messege} onChange={onChange} />
                <a href={api}>
                    <button type='button' className='Contact-send' onClick={click}>Enviar</button>
                </a>
            </div>
        </section>
    )
}

export { ContactForm };