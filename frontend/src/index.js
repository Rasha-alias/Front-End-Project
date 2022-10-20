import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom";
/**
 * This Component Render The main react component onto the “root” element (which it is marked in the html file). 
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/**
 * @author Rasha Alias <rashaziyad000@gmail.com>
 */

