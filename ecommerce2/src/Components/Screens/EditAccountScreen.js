import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './EditAccountScreen.css';
import InputBtn from '../input1';
import Logo from '../logo';
import NavList from '../nav';
import FooterMain from '../footer-main';
import EmailBtn from '../EmailBtn';
import '../footer-secondary.css';
import SecondFooter from '../footer-secondary';
import CurrencyBtn from '../CurrencyBtn';

function EditAccount() {

    const location = useLocation();
    //const email = location.state?.email;
    const [email, setEmail] = useState(location.state?.email || '');
    const firstName = location.state?.firstName;
    const lastName = location.state?.lastName;
    const [newEmail, setNewEmail] = useState(email);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/account/updateinformation', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
              //body: JSON.stringify({ email: newEmail, oldEmail: email }),
              body: JSON.stringify({ email, oldEmail: location.state?.email }),
            });
            const data = await response.json();
            //setMessage(data.message);
            console.log(data);
            navigate('/account', { state: { firstName, lastName, email } });
        } catch (error) {
           // setMessage('Error updating email');
           console.error(error);
        }

     
}


    return (

    <div className='EditAccountScreen'>
    <header className="header1">
            <InputBtn />
            <Link to = '/' style={{ textDecoration: 'none'}}>
            <Logo />
            </Link>
            <NavList />
           </header>
   
    <div className='edit-account-main'>




    <div className="edit-account-main-box">
    <h1 style={{ marginTop: 0, fontFamily: 'Open Sans', color: 'black' }}>Edit Account Information</h1>

   

    <p style={{ marginBottom: 90, fontSize: 14 }}>{firstName} {lastName}</p>
    {message && <p>{message}</p>}

    
          
          <h4>Email Address</h4>
      
        <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} />


        <div className='edit-save-cancel-btns'>
        <button type="submit" onClick={e => handleSubmit(e)}>Update</button>
        <button className='cancel-btn' onClick={() => navigate('/account', { state: { firstName, lastName, email } })}>Cancel</button>
        </div>
       

      
        <button className='forgot-password-btn'>Change Password</button>
       
    
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
   
    </div>)
}

export default EditAccount;