import React from 'react';
import '../styles/PasswordRecovery.scss';
import logo from '../assets/logos/bag-fill.svg'

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<div className='container-logo'>
					<img src={logo} alt="logo"/>
					<span >BUYALL</span>
				</div>
				<h1 className="title-recovery">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;