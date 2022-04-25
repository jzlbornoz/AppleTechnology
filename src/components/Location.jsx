import React from 'react';
import '../style/components/Location.css';
import { Map } from './Map';
const Location = () => {
    return (
        <div className='Location'>
            <div className="Location-wrapped">
                <div className="Location-text">
                    <h2>UBICACION</h2>
                    <p>Av. Las Américas, Centro Comercial Plaza Mayor, Planta baja, local LP-16</p>
                    <br />
                    <h3>HORARIO DE TRABAJO</h3>
                    <ul>
                        <li>Lunes a Sabado</li>
                        <li>10:00am-12:30pm</li>
                        <li>03:00pm-07:30pm</li>
                    </ul>
                    <div className="Location-bar"></div>
                </div>
                <div className="Location-map">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export { Location };