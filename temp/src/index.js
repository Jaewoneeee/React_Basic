import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppClass from './AppClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // strictMode는 오류나는걸 잡아주는놈임
  <React.StrictMode> 
    <AppClass />
  </React.StrictMode>
);

