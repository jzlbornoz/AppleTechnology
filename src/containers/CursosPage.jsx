import React from 'react';
import '../style/containers/CursosPage.css';
import { CursoPy } from '../components/CursoPy';

const CursosPage = () => {
    return (
        <section className='CursosPage'>
            <div className="CursosPage-wrapped">
                <div className="wrapped-py">
                    <CursoPy />
                </div>
                <div className="wrapped-js">
                    
                </div>
            </div>
        </section>
    )
}

export { CursosPage };