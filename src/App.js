import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NewApp from './Component/NewApp';
import NavBar from './Component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [category,setCategory]=useState('general')
  return (
    <div>
    <NavBar setCategory={setCategory}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewApp category={category}/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
