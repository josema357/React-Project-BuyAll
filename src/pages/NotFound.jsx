import React from 'react'
import '../styles/NotFound.scss'
import error from '../assets/icons/bug-fill.svg'

const NotFound = () => {
    return (
        <div className='NotFound'>
            <div className='error-box'>
                <img src={error} alt="" />
                <div>404 ERROR</div>
                <div>SORRY, THE PAGE NOT FOUND</div>
            </div>
        </div>
    )
}

export default NotFound