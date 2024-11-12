import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createTheme({
  /** Put your mantine theme override here */
});
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);