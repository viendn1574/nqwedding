
import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeddingHeader } from './header';
// import { Countdown } from './App';
// import { Header } from './header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <WeddingHeader />
    </StyledEngineProvider>
  </React.StrictMode>


);

