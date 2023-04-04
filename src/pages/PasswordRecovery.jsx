import React from 'react';
import '../styles/PasswordRecovery.scss';
import logo from '../assets/logos/bag-fill.svg'

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<div className='container-logo-global'>
					<img src={logo} alt="logo"/>
					<span >BUYALL</span>
				</div>
				<h1 className="title-recovery">Password recovery</h1>
				<p className="subtitle-recovery">Inform the email address used to create your account</p>
				<form action="/login" className="form-global">
					<label htmlFor="email" className="label-global">Email address</label>
					<input type="text" id="email" className="input-global input-email-global" />
					<input type="submit" value="Confirm" className="primary-button-global btn-button-global"/>
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;