import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.js';
import './index.css';  // Update the import statement
import 'tailwindcss/tailwind.css';

const rootElement = document.getElementById('root');
const strictModeElement = <React.StrictMode><App /></React.StrictMode>;

createRoot(rootElement).render(strictModeElement);
