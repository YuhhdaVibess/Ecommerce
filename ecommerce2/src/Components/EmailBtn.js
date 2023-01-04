import './footer-main.css';

function EmailBtn() {
    return(
        <div className='Email-Btn'>
            <h1>Sign Up For News & Promotions</h1>
            <p className='Email-title'>Email Address</p>
            <input type='email' className='email-input'></input>
            <p className='email-description'>By signing up, you confirm you are over 16 years of age and you want to receive Flight Club emails. Please see our Terms & Conditions and Privacy Policy for more details.</p>
        </div>
    )
}

export default EmailBtn;