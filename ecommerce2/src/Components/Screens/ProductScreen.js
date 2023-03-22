import {React, useState, useEffect} from 'react'
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

//const ProductData = [...NewReleases, ...StaffPicks, ...MusicInfluence];

const [shoes, setShoes] = useState([]);
const [sizes, setSizes] = useState([]);
const [Price, setPrice] = useState([sizes[0].price]);
const [product, setProduct] = useState(null);

useEffect(() => {
  fetch('http://localhost:5000/shoes')
    .then(res => res.json())
    .then(data => {
      setShoes(data);
      const product = shoes.find((shoe) => shoe.shoeid === id); // find product inside effect
      setProduct(product); // set product to state
    });
}, []);

console.log(shoes, 'shoe info');

useEffect(() => {
  fetch('http://localhost:5000/sizes')
      .then(res => res.json())
      .then(data => setSizes(data));
      console.log(sizes, 'sizes')
}, []);


//const Product = ProductData.find((product) => {
 // return product.id === parseInt(id);
 //});
  //const {title, img, description, catagory, sizes} = Product;

  //this is the new one uncomment this, const Product = shoes.find((shoe) => {
   // return shoe.shoeid === (id);
  // });
  // if (Product) {
  //  console.log('product exists')
 //  // const {title, img, description, category, category2} = Product;
  // } else {
  //  console.log('product not found')
  // }
  

   // const {title, img, description, catagory, sizes} = Product;

//sizes
//this was already commented out before adjusting postgres database // const [price, setPrice] = useState(sizes);

//const [sizes2, setSizes] = useState([sizes]);
//const [Price, setPrice] = useState(sizes[0].price);
const [selectedSize, setSelectedSize] = useState(sizes[0].size);

const UpdatePrice = (event) => {
  const sizePrice = sizes.find((size) => size.size === parseInt(event.target.innerHTML, 10));
  setPrice(sizePrice.price)
  setSelectedSize(parseInt(event.target.innerHTML), 10);
}
  
    

const Sizes2 = sizes.find((sizes) => 
  <div>{sizes.size}</div>
);

const Sizes = sizes.map((sizes) => 
  <div onClick={UpdatePrice} value={sizes.price} className= {sizes.size === selectedSize ? "Sizes-selected" : "Sizes"}>{sizes.size}</div>
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
       <img className='Product-Screen-img' ></img>
        <div className='Product-Screen-info-container'>
          <div className='Product-Screen-info'>
            <h1 className='Product-Screen-Title'></h1>
            <p className='Product-Screen-Description'></p>
            <p className='Catagory'></p>
           <div className='Sizes-Container'></div>
           <div className='Product-btns'>
            <div className='Product-btn1'>
            <label style={{fontWeight: 500,  fontSize: 14, fontFamily: "Helvetica Neue"}}>BUY NEW</label>
            <button className='Product-btn'>$+</button>
            
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

//The useState hook is a function that returns an array with two elements: the current state and a function that updates the state. You can then destructure this array to give names to the state and the function.

//In this case, the initial value of the sizes2 state variable is set to [sizes], which is an array containing the sizes property of the product. This is done because useState expects the initial state to be a single value, and the value must be the same type each time the component renders. By putting sizes inside an array, it becomes a single value of type array.

//If the initial value of sizes2 was set to just sizes, like this:

//Copy code
//const [sizes2, setSizes] = useState(sizes);
//then sizes2 would be set to an object with properties size and price. This would work fine as long as the value of sizes never changes, but if the value of sizes changed (for example, if the user selected a different size), then sizes2 would be set to a new object with different properties. This would cause a re-render of the component, which is not what we want.

//By wrapping sizes in an array, the value of sizes2 will always be an array, and the contents of the array may change, but the array itself will not be replaced with a new object. This means that the component will not re-render when the value of sizes changes, which is more efficient.

//I hope this helps to clarify things! Let me know if you have any more questions.

//In the code, sizes is an array of objects, each representing a size of the product with a size and price property.

//useState is a hook in React that allows a functional component to have state variables. It takes an initial value as an argument and returns an array with two elements: the current value of the state variable and a function to update it. In this case, the initial value of the state variable sizes2 is being set to the sizes array of the product.

//The reason the sizes array is wrapped in square brackets when it is passed as an argument to useState is because the hook expects the initial value to be a single element. If you don't wrap sizes in square brackets, it will be treated as multiple arguments, which will cause an error.

//For example, if you wrote const [sizes2, setSizes] = useState(sizes), it would be equivalent to writing const [sizes2, setSizes] = useState(sizes[0], sizes[1], sizes[2], ...), which would cause an error because useState only expects one argument. Wrapping sizes in square brackets allows you to pass the entire array as a single argument.

