import React from 'react'
import '../styles/NewPassword.scss';

const NewPassword = () => {
  return (
    <div className="login">
        <div className="form-container">
            <div className="logo">
                <img src="./logos/bag-fill.svg" alt="logo"/>
                <span >BUYALL</span>
            </div>
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="" className="form">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" id="password" placeholder="**********" className="input input-pass"/>
                <label htmlFor="repeat-password" className="label">Password</label>
                <input type="password" id="repeat-password" placeholder="**********" className="input input-repeat-pass"/>
                <input type="submit" value="Confirm" className="primary-button login-button"/>
            </form>
        </div>
    </div>
  )
}

export default NewPassword;