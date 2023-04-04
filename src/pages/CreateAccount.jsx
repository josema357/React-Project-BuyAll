import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title-createpass">My account</h1>
				<form action="/" className="form-global">
					<div>
						<label htmlFor="name" className="label-global">Name</label>
						<input type="text" id="name" placeholder="Teff" className="input-global input-name" />
						<label htmlFor="email" className="label-global">Email</label>
						<input type="text" id="email" placeholder="platzi@example.com" className="input-global input-email" />
						<label htmlFor="password" className="label-global">Password</label>
						<input type="password" id="password" placeholder="*********" className="input-global input-password" />
					</div>
					<input type="submit" value="Create" className="primary-button-global btn-button-global" />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;