import React from 'react'
import { ReactDOM, useState } from 'react';
import '../header1.css';
import InputBtn from '../input1';
import Logo from '../logo';
import NavList from '../nav';
import '../main.css'
import '../products-container1.css'
import Product from '../product';
import Button from '../Button';
import '../products-container2.css';
import Product2 from '../Product2';
import Info from '../info';
import '../footer.css';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import '../footer-secondary.css';
import SecondFooter from '../footer-secondary';
import CurrencyBtn from '../CurrencyBtn';
import { NewReleases } from '../../data';
import { NewReleasesProducts, StaffPicksProducts, MusicInfluenceProducts } from '../productList';
import CatagoriesSection from '../Product2';
import InfoSection from '../info';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductScreen from './ProductScreen';


function HomeScreen() {
  return (
    <div className='App'>
       <header className="header1">
       <InputBtn />
       <Link to = '/' style={{ textDecoration: 'none'}}>
       <Logo />
       </Link>
       <NavList />
      </header>
      <div className='main'>
        <img src='https://wallpaperaccess.com/full/680084.jpg' />
        <div className='container'>
        <h1 className='main-text'>THE DIFFERENCE: AIR <br></br>JORDAN 1 'CHICAGO'</h1>
          <a className='main-link' href=''>Shop Now</a>
        </div> 
      </div>
      <h1 style={{ fontFamily: 'Open Sans', textAlign: 'center', padding: 30, marginTop: 40}}>NEW RELEASES</h1>
    <div className='products-container1'> 
    {NewReleasesProducts}
    </div>

    <div className='btn-container'>
    <Button className='Btn' value="SHOP NEW RELEASES"/>
    </div>
    <h1 style={{ fontFamily: 'Open Sans', textAlign: 'center', padding: 30, marginTop: 40}}>STAFF PICKS</h1>
    <div className='products-container1'> 
    {StaffPicksProducts}
    </div>
    <div className='btn-container'>
    <Button className='Btn' value ='SHOP STAFF PICKS' />
    </div>
    <h1 style={{ fontFamily: 'Open Sans', textAlign: 'center', padding: 30, marginTop: 40}}>MUSIC INFLUENCE</h1>
    <div className='products-container1'>  
    {MusicInfluenceProducts}
    </div>
    <div className='btn-container'>
    <Button className='Btn' value='SHOP MUSIC INFLUENCE'/>
    </div>
    <div className='products-container2-container' style={{backgroundColor: 'white'}}>
     <div className='products-container2'>
       {CatagoriesSection}
     </div>
    </div>
  <div className='super-container'>
   <div className='info-container'>
      {InfoSection}
    </div>
  </div>

  <footer className='footer'>
    <section className='logo-container'>
      <Logo />
    </section>
    <nav className='nav'>
    {FooterMain}
      <EmailBtn />
    </nav>
   <footer className='footer-secondary'>
    <SecondFooter />
      <h1 style={{fontSize: 20}}>© 2022 Flight Club New York LLC. All Rights Reserved</h1>
      <CurrencyBtn />   
   </footer>
  </footer>
    </div>
  )
}

export default HomeScreen