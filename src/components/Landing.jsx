import React from 'react';
import '../style/components/Landing.css';

const Landing = () => {
    return (
        <section className='Landing'>
            <div className="Landing-wrapped">
                <h2 data-aos="fade-up">Servicio Técnico Apple</h2>
            </div>
            <div className="Landing-list" data-aos="fade-up">
                <div className='Landing-item'>
                    <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/macfamily-productnav-imac-icon_2x.png" alt="iMac" />
                    <p className='Landing-p'>iMac</p>
                </div>
                <div className='Landing-item'>
                    <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/macfamily-productnav-macbookpro-icon_2x.png" alt="MacBook" />
                    <p className='Landing-p'>macBook</p>
                </div>
                <div className='Landing-item'>
                    <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_iphone_family_2x.png" alt="iphone" />
                    <p className='Landing-p'>iPhone</p>
                </div>
                <div className='Landing-item'>
                    <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_ipad_family_2x.png" alt="Ipad" />
                    <p className='Landing-p'>iPad</p>
                    </div>
            </div>
        </section>
    )
}

export { Landing }