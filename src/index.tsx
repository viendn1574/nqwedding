
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeddingFooter } from './footer';
import { WeddingHeader } from './header';
import { WeddingBody } from './WeddingBody';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <div className='d-flex flex-column'>
    <WeddingHeader />
    <WeddingBody />
    <WeddingFooter />
  </div>

);

