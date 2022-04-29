import React, { useRef, useEffect } from 'react';
import '../style/components/Location.css';
import { Map } from './Map';

const Location = () => {

    const textRef = useRef(null);
    const mapRef = useRef(null);
    const callBackFuncion = (entries) => {
        entries.forEach(element => {
            if (element.isIntersecting) {
                element.target.classList.add('visible');
            } else {
                //element.target.classList.remove('visible');
            }
        });
    }
    const options = {
        root: null,
        rootMargin: '100px 0px 0px 100px',
        threshold: 1.0
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFuncion, options);
        if (textRef.current) {
            observer.observe(textRef.current);
        }
    }, [textRef, options]);
    useEffect(() => {
        const observer = new IntersectionObserver(callBackFuncion, options);
        if (mapRef.current) {
            observer.observe(mapRef.current);
        }
    }, [mapRef, options])

    return (
        <div className='Location'>
            <div className="Location-wrapped">
                <div className="Location-text" >
                    <h2>UBICACION</h2>
                    <p>Av. Las Américas, Centro Comercial Plaza Mayor, Planta baja, local LP-16</p>
                    <br />
                    <h3>HORARIO DE TRABAJO</h3>
                    <ul>
                        <li>Lunes a Sabado</li>
                        <li>10:00am-12:30pm</li>
                        <li>03:00pm-07:30pm</li>
                    </ul>
                    <div className="Location-bar" ref={textRef}></div>
                </div>
                <div className="Location-map" ref={mapRef}>
                    <Map />
                </div>
            </div>
        </div>
    )
}

export { Location };