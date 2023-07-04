import React from 'react';

import { createRoot } from 'react-dom';
import App from './App.js';
import './index.css';
import 'tailwindcss/tailwind.css';


createRoot(document.getElementById('root')).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App)
  )
);
