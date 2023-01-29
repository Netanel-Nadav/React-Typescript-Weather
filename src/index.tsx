import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'

// CONTEXT
import { ThemeProvider } from './context/ThemeContext'



// STYLES
import './assets/styles/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <Provider store={store}>
    <ThemeProvider>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </ThemeProvider>
    </Provider>

  </React.StrictMode>
);
