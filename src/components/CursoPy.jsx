import React from 'react';
import '../style/components/CursoPy.css';
const CursoPy = () => {
    const contactPy = 'https://api.whatsapp.com/send?phone=584121284000&text=Me encantaria iniciar el curso de Python';
    return (
        <section className='CursoPy'>
            <div className="CursoPy-circle"></div>
            <div className="CursoPy-wrapped">
                <section className='CursoPy-text'>
                <h2>Curso Básico de <span>Python</span></h2>
                <p>Aprende a programar desde cero con el lenguaje de mayor crecimiento en el planeta: Python. 
                    Descubre qué es un algoritmo y cómo se construye uno. 
                    Domina las variables, funciones, estructuras de datos, los condicionales y ciclos.</p>
                    <div className='CursoPy-button'><a href={contactPy}>Inscribete</a></div>
                </section>
                <section className="CursoPy-img">
                    <div className="Py-logo"></div>
                </section>
            </div>
        </section>
    )
}

export { CursoPy }