import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState, } from "react"
import './input.css'
import { NewReleases } from "../data";
import { StaffPicks } from "../data";
import { MusicInfluence } from "../data";
import Logo from './logo';
import NavList from './nav';
import HomeScreen from "./Screens/HomeScreen";

const ProductData = [...NewReleases, ...StaffPicks, ...MusicInfluence];

 
 function InputBtn() {

    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const [IsDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleChange = (event) => {
        setInputValue(event.target.value);
      };
      useEffect(() => {
        const filteredResults = ProductData.filter((product) =>
          product.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        setResults(filteredResults);
      }, [inputValue]);


     useEffect(() => {
      const handleClick = (event) => {
    
        if (!event.target.closest(".Dropdown")) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener("click", handleClick);
     return () => {
        document.removeEventListener("click", handleClick);
      };
    }, []);


      const toggleDropdown = (event) => {
        if (event.target.closest('.InputBtn')) {
         // setIsDropdownOpen((prevState) => !prevState);
         setIsDropdownOpen(true);
         
        }
      };

 return (

  <div className="Dropdown" onClick={toggleDropdown}>
            <input type='text' className='InputBtn' value={inputValue} onChange={handleChange} placeholder="Search"></input>
            <div className='Dropdown-content' style={{ display: IsDropdownOpen ? "flex" : "none" }}>
              <div className='dropdown-container'>
              {results.map((product) => (
                    <div className= 'DropdownItem'>
                        <div key={product.id}><img src={product.img}></img></div>
                        <div>{product.description}</div>
                    </div>
               ))}
              </div>
              
            </div>
         </div>
);
}
  
  
export default InputBtn