import React from 'react';
import '../styles/Login.scss';
import logo from '../assets/logos/bag-fill.svg'

const Login = () => {

	return (
		<div className="Login">
			<div className="Login-container">
				<div className='container-logo-global'>
					<img src={logo} alt="logo"/>
					<span >BUYALL</span>
				</div>
				<form action="/" className="form-global">
					<label htmlFor="email" className="label-global">Email address</label>
					<input type="text" name="email" placeholder="example@example.com" className="input-global input-email-global" />
					<label htmlFor="password" className="label-global">Password</label>
					<input type="password" name="password" placeholder="*********" className="input-global input-password" />
					<button type="submit" className="primary-button-global btn-button-global">Log in</button>
					<a className='forgot' href="/recovery-password">Forgot my password</a>
				</form>
				<button className="signup-button secondary-button-global">Sign up</button>
			</div>
		</div>
	);
}

export default Login;