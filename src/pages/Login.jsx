import React from 'react';
import '../styles/Login.scss';
import logo from '../assets/logos/bag-fill.svg'

const Login = () => {

	return (
		<div className="Login">
			<div className="Login-container">
				<div className='container-logo'>
					<img src={logo} alt="logo"/>
					<span >BUYALL</span>
				</div>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="example@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button type="submit" className="login-button">Log in</button>
					<a id='forgot' href="/recovery-password">Forgot my password</a>
				</form>
				<button className="signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;