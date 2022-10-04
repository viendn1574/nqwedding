
import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeddingFooter } from './footer';
import { WeddingHeader } from './header';
import { WeddingBody } from './WeddingBody';
// import { Countdown } from './App';
// import { Header } from './header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <StyledEngineProvider injectFirst>
      <div className='d-flex flex-column'>
        <WeddingHeader />
        <WeddingBody />
        <WeddingFooter />
      </div>

    </StyledEngineProvider>


);

