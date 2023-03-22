import React from 'react';
import '../styles/SendEmail.scss';
import logo from '../assets/logos/bag-fill.svg'
import email from '../assets/icons/email.svg'

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<div className='container-logo'>
					<img src={logo} alt="logo"/>
					<span >BUYALL</span>
				</div>
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={email} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;