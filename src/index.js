import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/menu/menu';
import Login from './components/login/login';
import CriarConta from './components/criarconta/criarconta';
import Banner from './components/banner/banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={
          <>
            <Menu />
            <Banner />
          </>

        }>
        </Route>

        <Route path='/login' element={<Login />}></Route>
        
        <Route path='/criarconta' element={<CriarConta />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
