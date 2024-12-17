import React from 'react';
import ReactDOM from 'react-dom/client';
import {initBolt} from '../lib/utils/bolt';
import App from './App';
import './scss/main.scss';

initBolt();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
