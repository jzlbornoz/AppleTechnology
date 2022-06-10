import React from 'react';
import { Dell } from './Dell';
import { Acer } from './Acer';
import { Lenovo } from './Lenovo';
import { Hp } from './Hp';
import '../style/components/Support.css';

const Support = () => {
    return (
        <section className='Support'>
            <h2>Soporte para todas las Marcas</h2>
            <div className='Support-wrapped'>
                <Dell />
                <Acer />
                <Lenovo />
                <Hp />
            </div>
        </section>
    )
}

export { Support };