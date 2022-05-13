import React from 'react';
import '../style/components/CursoJs.css';


const CursoJs = () => {
    const contactJs = 'https://api.whatsapp.com/send?phone=584121284000&text=Me encantaria iniciar el curso de JavaScript';
    return (
        <section className="CursoJs">
            <div className="CursoJs-line"></div>
            <div className="CursoJs-wrapped">
                <section className='CursoJs-text'>
                    <h2>Curso Práctico de <span>JavaScript</span></h2>
                    <p>Aprende desarrollo web con JavaScript. Practica los fundamentos de la programación para crear algoritmos que
                        resuelven problemas en la vida real. Convierte problemas en algoritmos con JavaScript y expande su poder
                        integrando HTML interactivo.
                        Descubre el potencial de programar sitios web con JavaScript.</p>
                    <div className='CursoJs-button'><a href={contactJs}>Inscribete</a></div>
                </section>
                <section className="CursoJs-img">
                    <div className="Js-logo"></div>
                </section>
            </div>
        </section>
    )
};

export { CursoJs }