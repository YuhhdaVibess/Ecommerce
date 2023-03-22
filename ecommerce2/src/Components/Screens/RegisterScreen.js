import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterScreen.css';
import InputBtn from '../input1';
import Logo from '../logo';
import NavList from '../nav';

function RegisterScreen() {


  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailStyling, setEmailStyling] = useState('emailAddress');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordStyling, setPasswordStyling] = useState('password-register');
  const [confirmPasswordStyling, setConfirmPasswordStyling] = useState('confirm-password');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [firstNameStyling, setFirstNameStyling] = useState('firstName');
  const [lastNameStyling, setLastNameStyling] = useState('lastName');


  
 const navigate = useNavigate();
  
   const onFirstNameChange = (event) => {
     setfirstName(event.target.value);
  }
  
  const onLastNameChange = (event) => {
    setlastName(event.target.value);
  }
  
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }
  
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  } 

  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }
  
  const OnSubmitRegister = async (e) => {
    e.preventDefault();

    if (!firstName || !/^[a-zA-Z]+$/.test(firstName)) {
      setFirstNameError('Please enter a valid first name');
      setFirstNameStyling('firstName-error-styling');
      return;
    } else {
      setFirstNameError('');
      setFirstNameStyling('firstName');
    }
    
     if (!lastName || !/^[a-zA-Z]+$/.test(lastName)) {
      setLastNameError('Please enter a valid last name');
      setLastNameStyling('lastName-error-styling');
      return;

    } else {
      setLastNameError('');
      setLastNameStyling('lastName');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Email address is not valid.");
      setEmailStyling('email-error-styling');
      return;
    } else {
      setEmailError('');
      setEmailStyling('emailAddress');
    }

    if (password.length < 6 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      setPasswordError("Password must be at least 6 characters long and must contain at least 1 letter and 1 number.");
      setPasswordStyling('password-error-styling');
      return;

    } else if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      setPasswordStyling('password-error-styling');
      setConfirmPasswordStyling('confirm-password-error');
      return;

    } else {
      setPasswordError('');
      setPasswordStyling('password-register');
      setConfirmPasswordStyling('confirm-password');
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        })
      });
  
      if (response.ok) {
        navigate('/account', { state: { firstName, lastName, email } });
      }
    } catch (error) {
      console.error(error);
    }
  };





  
  
  return(
    <div className='RegisterScreen'>
    <header className="header1">
           <InputBtn />
           <Link to = '/' style={{ textDecoration: 'none'}}>
           <Logo />
           </Link>
           <NavList />
          </header>
    
    
    <div className='main-account'>
    <img className='main-img' src='https://images.unsplash.com/photo-1645888932334-5efcd35cf178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1046&q=80' />
     <div className='main-box-container-register'>
        
          <div className='register-section'> 
          <Link to='/login' className='register-btn1' style={{ textDecoration: 'none'}}>
            Login
          </Link>
          <a className='register-btn2'>Register</a>
        </div>
    
    
    <form className='form' onSubmit={e => OnSubmitRegister(e)}>
        <div className="form-group">
         <input type="text" className={firstNameStyling} aria-describedby="firstName" placeholder="First Name" onChange={onFirstNameChange} /> 
        </div>
    
        <div className="form-group">
         <input type="text" className={lastNameStyling} aria-describedby="lastName" placeholder="Last Name" onChange={onLastNameChange} /> 
        </div>
    
        <div className="form-group">
         <input type="email" className={emailStyling} aria-describedby="emailAddress" placeholder="Email Address" onChange={onEmailChange}/> 
        </div>
    
        <div className="form-group">
          <input type="password" className={passwordStyling} placeholder="Password" onChange={onPasswordChange}/>
         </div>
    
         <div className="form-group">
          <input type="password" className={confirmPasswordStyling} placeholder="Confirm Password" onChange={onConfirmPasswordChange}/>
         </div>
         
         <div className='firstName-error'>{firstNameError}</div>
         <div className='lastName-error'>{lastNameError}</div>
         <div className='email-error'>{emailError}</div>
         <div className='password-error'>{passwordError}</div>

         <button type="submit" className="register-btn">Register</button>
         
    </form>
    
        
      
     </div>
    
    
    
    </div>
    </div>
    );
  




}


export default RegisterScreen;