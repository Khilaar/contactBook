import React, { useState } from 'react';
import './header.css';




function Header() {


    return (
        <div className='header'>
            <div className='logoContainer'>
                <h1 className='header-title'>Contact Book</h1>
                <h2 className='header-subTitle'>By Luca Oliverio</h2>
            </div>
            <div className='headerMenuContainer'>
                <p className='header-paragraph'>Made in Switzerland</p>
                <p className='header-paragraph2'>Powered by React JS</p>
            </div>
        </div>
    );
}

export default Header;