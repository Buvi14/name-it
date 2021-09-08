import React from 'react';
import './Header.css'

export default function Header({ headTitle, imgSize }) {
    return (
        <div className="header-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`header-image ${imgSize ? 'header-image-expanded' : 'header-image-collapsed'}`}
                alt="headerImage" />
            <div className={`header-text ${imgSize ? 'header-text-transform' : 'header-text-small'}`}>{headTitle}</div>
        </div>
    )
}
