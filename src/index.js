import React from "react";
import {createRoot} from 'react-dom/client';
import { App } from './App';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

createRoot(
    document.getElementById('app')
    ).render(
        <App />
    )
    AOS.init();