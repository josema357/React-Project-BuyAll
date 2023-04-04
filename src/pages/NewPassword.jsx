import React from 'react'
import '../styles/NewPassword.scss';
import logo from '../assets/logos/bag-fill.svg'

const NewPassword = () => {
  return (
    <div className="New-Pass">
        <div className="form-container-newpass">
            <div className="container-logo-global">
                <img src={logo} alt="logo"/>
                <span >BUYALL</span>
            </div>
            <h1 className="title-newpass">Create a new password</h1>
            <p className="subtitle-newpass">Enter a new password for your account</p>
            <form action="/login" className="form-global">
                <label htmlFor="password" className="label-global">Password</label>
                <input type="password" id="password" placeholder="**********" className="input-global input-pass"/>
                <label htmlFor="repeat-password" className="label-global">Password</label>
                <input type="password" id="repeat-password" placeholder="**********" className="input-global input-repeat-pass"/>
                <input type="submit" value="Confirm" className="primary-button-global btn-button-global"/>
            </form>
        </div>
    </div>
  )
}

export default NewPassword;