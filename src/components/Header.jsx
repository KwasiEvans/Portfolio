import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className ="header-wraper">
            <div className = "main-info">
                <h1>web development and website promotions</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads SMM"]}
                    typeSpeed={60}
                    backSpeed={80}
                    loop
                />
                <a href="#" className ="btn-min-offer"><span>Contact me</span></a>
            </div>
        </div>
    )
}

export default Header
