import React from 'react';
import '../style/components/Landing.css';

const Landing = () => {
    return (
        <section className='Landing'>
            <div className="Landing-wrapped">
                <h2>Servicio Tecnico Apple</h2>
            </div>
            <div className="Landing-list">
                <div className='Landing-item'>
                    <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/macfamily-productnav-imac-icon_2x.png" alt="iMac" />
                    <p>iMac</p>
                </div>
                <div className='Landing-item'>
                    <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/macfamily-productnav-macbookpro-icon_2x.png" alt="MacBook" />
                    <p>macBook</p>
                </div>
                <div className='Landing-item'>
                    <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_iphone_family_2x.png" alt="iphone" />
                    <p>iPhone</p>
                </div>
                <div className='Landing-item'>
                    <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_ipad_family_2x.png" alt="Ipad" />
                    <p>iPad</p>
                    </div>
            </div>
        </section>
    )
}

export { Landing }