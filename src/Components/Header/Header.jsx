import React from 'react';
import  Logo from '.././../images/githublogo.png';
import './Header.css'

const Header = () => {
    return(
        <>
            <div className="img-container">
                <img src={Logo}  alt="githublogo"/>
                
            </div>
        </>
    )
}

export default Header;