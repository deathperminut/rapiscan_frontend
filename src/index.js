import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Importar estilos CSS
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Importar bootstrap.bundle (incluye Popper.js y jQuery)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HashRouter } from 'react-router-dom';
import { ProviderContext } from './Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ProviderContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProviderContext> 
  </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
