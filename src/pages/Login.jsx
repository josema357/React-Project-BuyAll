import React , {useRef} from 'react';
import '../styles/Login.scss';
import logo from '../assets/logos/bag-fill.svg'

const Login = () => {
	const form=useRef(null);
	const handleSubmit=(event)=>{
		event.preventDefault();
		const formData=new FormData(form.current);
		const data={
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data)
	}
	return (
		<div className="Login">
			<div className="Login-container">
				<div className='container-logo-global'>
					<img src={logo} alt="logo"/>
					<span >BUYALL</span>
				</div>
				<form action="/" className="form-global" ref={form}>
					<label htmlFor="email" className="label-global">Email address</label>
					<input type="text" name="email" placeholder="example@example.com" className="input-global input-email-global" />
					<label htmlFor="password" className="label-global">Password</label>
					<input type="password" name="password" placeholder="*********" className="input-global input-password" />
					<button type="submit" className="primary-button-global btn-button-global" onClick={handleSubmit}>
						Log in
					</button>
					<a className='forgot' href="/recovery-password">Forgot my password</a>
				</form>
				<button className="signup-button secondary-button-global">
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;