import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title-account">My account</h1>
				<form action="/" className="form-global">
					
						<label className="label-global local-prop">Name</label>
						<p className="value">Camila Yokoo</p>
						<label className="label-global">Email</label>
						<p className="value">camilayokoo@gmail.com</p>
						<label className="label">Password</label>
						<p className="value">*********</p>
					
					<input type="submit" value="Edit" className="secondary-button-global" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;