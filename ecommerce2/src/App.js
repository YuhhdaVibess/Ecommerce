import React from 'react';
import { ReactDOM, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductScreen from './Components/Screens/ProductScreen';
import HomeScreen from './Components/Screens/HomeScreen';
import LoginScreen from './Components/Screens/LoginScreen'
import RegisterScreen from './Components/Screens/RegisterScreen'
import AccountScreen from './Components/Screens/AccountScreen';
import EditAccount from './Components/Screens/EditAccountScreen';

function App() {
  return (
<div className="App">
    <Routes>
      <Route path='/' element={<HomeScreen/>}></Route>
      <Route path='/products/:id' element={<ProductScreen/>}></Route>
      <Route path='/login' element={<LoginScreen/>}></Route>
      <Route path='/register' element={<RegisterScreen/>}></Route>
      <Route path='/account' element={<AccountScreen/>}></Route>
      <Route path='/account/updateinformation' element={<EditAccount/>}></Route>
    </Routes>
</div>
 );}

export default App;