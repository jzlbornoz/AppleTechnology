import React from 'react';
import '../style/containers/CursosPage.css';

const CursosPage = () => {
    return (
        <section className='CursosPage'>
            <div className="CursosPage-wrapped">
                <div className="wrapped-js">
                    Curso Js
                </div>
                <div className="wrapped-py">
                    Curso Py
                </div>
            </div>
        </section>
    )
}

export { CursosPage };