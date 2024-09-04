import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import App from './App';

const element = document.getElementById('root')
if(element){
  const root: Root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} 
