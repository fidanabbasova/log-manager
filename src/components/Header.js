import React, { useContext } from 'react';
import logo from './../img/logo.svg';
import logoutIcon from './../img/logout-icon.svg';
import randomColor from './../helper/randomColor';
import getDate from './../helper/getDate';
import { UserContext } from './../App';

function Header() {
    let color = randomColor();
    const userContext = useContext(UserContext);
    const {user, logout} = userContext;
    const today = getDate();
    return (
        <header className="header-section">
            <img className="header-section-item header-section-item__left-side" src={logo} alt=""/>
            <div className="header-section-item header-section-item__right-side">
                <div className="circle" style={{background: color, color: color}}>
                    <p className="circle-letter">{user.name[0]}</p>
                </div>
                <div className="header-section-text-container">
                    <h3 className="text text__normal text__medium text_left">{user.name} {user.surname}</h3>
                    <p className="text text__light text__small text__left">{today.date} {today.month}, {today.day}</p>
                </div>
                <button className="button button__transparent header-section-button" onClick={logout}>
                    <img src={logoutIcon} alt=""/>
                </button>
            </div>
        </header>
    )
}

export default Header;
