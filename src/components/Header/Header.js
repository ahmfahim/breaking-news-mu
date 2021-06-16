import React from 'react';
import './Header.css'
import Cover from '../../img/undraw_newspaper_k72w (1).svg'

const Header = () => {
    return (
        <div className="cover">
            <div className="cover-title">
                <h1>-|NEWS_TODAY|</h1>
            </div>
            <div className="cover-img">
                <img src={Cover} alt="" />
            </div>
            <h2>_|Top Headline Today|_</h2>
        </div>
    );
};

export default Header;