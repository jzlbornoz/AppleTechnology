import React from 'react';
import { Landing } from '../components/Landing';
import { Location } from '../components/Location';
import { Support } from '../components/Support';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Modal } from '../Modal';
import { useModal } from '../Modal/useModal';
import { ContactForm } from '../components/ContactForm';
import '../style/containers/Home.css';

const Home = () => {
  const { openModal, setOpenModal } = useModal();
  return (
    <div className='Home'>
      <Landing />
      <Location />
      <Support />
      {!!openModal && (
        <Modal>
          <ContactForm setOpenModal={setOpenModal} />
        </Modal>
      )}
      <WhatsAppIcon setOpenModal={setOpenModal} />

    </div>
  )
}

export { Home }