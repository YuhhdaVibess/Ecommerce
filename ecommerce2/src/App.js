import React from 'react';
import { ReactDOM, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductScreen from './Components/Screens/ProductScreen';
import HomeScreen from './Components/Screens/HomeScreen';



function App() {
  return (
<div className="App">
    <Routes>
      <Route path='/' element={<HomeScreen/>}></Route>
      <Route path='/products/:id' element={<ProductScreen/>}></Route>
    </Routes>
</div>
 );}

export default App;