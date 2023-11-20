/* Libraries */
// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Mantine
import { MantineProvider } from '@mantine/core'; 

// Components
import App from './App';

// Styles


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);