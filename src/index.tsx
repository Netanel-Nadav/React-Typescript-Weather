import React from 'react';
import ReactDOM from 'react-dom/client';



import { App } from './App';
import { BrowserRouter } from 'react-router-dom'

// CONTEXT
import { ThemeProvider } from './context/ThemeContext'



// STYLES
import './assets/styles/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </ThemeProvider>
  </React.StrictMode>
);
