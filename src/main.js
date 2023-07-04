import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.js';
import './index.css';
import 'tailwindcss/tailwind.css';

const rootElement = document.getElementById('root');
const strictModeElement = React.createElement(React.StrictMode, null, React.createElement(App));

createRoot(rootElement).render(strictModeElement);
