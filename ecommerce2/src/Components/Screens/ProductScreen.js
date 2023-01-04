import {React, useState} from 'react'
import './ProductScreen.css';
import InputBtn from '../input1';
import Logo from '../logo';
import NavList from '../nav';
import '../footer.css';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import '../footer-secondary.css';
import SecondFooter from '../footer-secondary';
import CurrencyBtn from '../CurrencyBtn';
import { useParams, Link } from 'react-router-dom'
import { NewReleases } from "../../data";
import { StaffPicks } from "../../data";
import { MusicInfluence } from "../../data";
import Button from '../Button';
import HomeScreen from './HomeScreen';

//setState to change the price based on the size the user selects

const ProductScreen = () => {

const { id } = useParams();

const ProductData = [...NewReleases, ...StaffPicks, ...MusicInfluence];

const Product = ProductData.find((product) => {
  return product.id === parseInt(id);
 });
  const {title, img, description, catagory, sizes} = Product;

//sizes
const [price, setPrice] = useState(sizes);

const UpdatePrice = (event) => {
  const sizePrice = sizes.find(size => size.size === event.target.innerHTML);
  setPrice(sizePrice)
console.log(event.target.innerHTML)
console.log(sizes)
}
  
    

const Sizes2 = sizes.find((sizes) => 
  <div>{sizes.size}</div>
);

const Sizes = sizes.map((sizes) => 
  <div onClick={UpdatePrice} value={sizes.price} className='Sizes'>{sizes.size}</div>
);
//end


  return (
    <div className='Product-Screen'>
      <header className="header1">
       <InputBtn />
       <Link to = '/' style={{ textDecoration: 'none'}}>
       <Logo />
       </Link>
      
       <NavList />
      </header>

      <div className='Product-Section'>
       <img className='Product-Screen-img' src={img}></img>
        <div className='Product-Screen-info-container'>
          <div className='Product-Screen-info'>
            <h1 className='Product-Screen-Title'>{title}</h1>
            <p className='Product-Screen-Description'>{description}</p>
            <p className='Catagory'>{catagory}</p>
           <div className='Sizes-Container'>{Sizes}</div>
           <div className='Product-btns'>
            <div className='Product-btn1'>
            <label style={{fontWeight: 500,  fontSize: 14, fontFamily: "Helvetica Neue"}}>BUY NEW</label>
            <Button className='Product-btn' value={price}/>
            </div>
            <div className='Product-btn2'>
            <label style={{fontWeight: 500,  fontSize: 14, fontFamily: "Helvetica Neue"}}>BUY USED</label>
            <Button className='Product-btn-used' value="OUT OF STOCK"/>
            </div>   
           </div>
           <div className='Product-gap'></div>
           <div className='About-container'>
              <div className='Product-about'>
                <h4 style={{fontWeight: 500, fontSize: 14}}>ABOUT THIS PRODUCT</h4>
                <div className='Product-about-p' >
                <p>Arriving in a familiar color palette but new for the AJ13, the Air Jordan 13 Retro 'Black University Blue' channels OG color blocking with classic colors. The upper features reflective black mesh overlays paired with black leather on the toe and tongue area, while rich University Blue suede wraps the back heel area and midsole. The black pods that represent a panther paw are also blacked out, leading to herringbone sections on the outsole. A carbon fiber adds stability underfoot, while Zoom Air units offer lightweight cushioning.</p>
                </div>  
                <p className='Product-about-p2'>dj5982 041 | black/university blue/white | 12/23/22</p>
              </div>
              <div className='Product-Shipping-Container'>
                <div className='Product-shipping-header'>
                  <h4 style={{fontWeight: 500, fontSize: 14}}>SHIPPING & RETURNS</h4>
                </div>
                <p style={{fontWeight:500, fontSize: 12, fontFamily: "Helvetica Neue", marginTop: 14 }}>Cancellations</p>
                <div className='Product-cancellations'>
                  <p>For sneakers, you may cancel your order within 3 hours of placing it or before it is confirmed by the seller - whichever comes first. If 3 hours have passed from when you placed the order and/or the seller has already confirmed the order, then the order cannot be canceled. If neither have occurred, you can cancel your order first by accessing it via “Track My Order” or “My Account,” clicking “Cancel Order” and following the instructions.</p>
                  <p style={{paddingTop: 12}}>If you checked out as a guest, you will need to create a Flight Club account.</p>
                </div>
                <p style={{fontWeight:500, fontSize: 12, fontFamily: "Helvetica Neue", marginTop: 14 }}>Delivery</p>
                <div className='Product-delivery'>
                  <p>Delivery and processing speeds vary by pricing options. The following shipping estimates apply only to the contiguous US and exclude deliveries to PO boxes and military bases. All delivery times are estimates and are not guaranteed. Shipments may be affected by weather-related delays, carrier limitations or other events outside of our control.</p>
                  <p style={{paddingTop: 12}}>"Lowest Price" orders may ship to Flight Club first for verification and typically take 7-10 business days (M-F, excluding holidays) to reach you. It will typically take 3-5 business days (M-F, excluding holidays) for a "Fastest To You" item, ordered before 2 PM ET with standard shipping, to be delivered.</p>
                  <p style={{paddingTop: 12}}>Estimated delivery times do not apply to international orders. International customers are responsible for any additional fees or taxes after an item ships.</p>
                </div>
                <p style={{fontWeight:500, fontSize: 12, fontFamily: "Helvetica Neue", marginTop: 14 }}>Returns</p>
                <div className='Product-returns'>
                  <p>All sales with Flight Club are final.</p>
                  <p style={{paddingTop: 12, marginBottom: 15}}>If you have any questions or concerns with regard to sizing or condition of a specific product on our site, please <a href='google.com'>contact us</a> before purchasing.</p>
                  <a href='google.com' style={{color: 'black'}}>Learn More</a>
                </div>
                <div className='Product-bottom'></div>
              </div>

           </div>
       </div>
        
         
        
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
      <h1 style={{fontSize: 20}}>© 2022 Yuhhr Club New York LLC. All Rights Reserved</h1>
      <CurrencyBtn />   
   </footer>
  </footer>
    </div>
  )
}

export default ProductScreen