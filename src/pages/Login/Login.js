import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './../../App';
import background from './../../img/background.png';
import backgroundIcon from './../../img/background-icon.svg';
import Logo from './../../components/Logo';
import LoginForm from './LoginForm';

function Login() {
    const userContext = useContext(UserContext);
    if(userContext.isAuthed === true) return <Redirect to='/dashboard' />
    return (
        <div className="login-background-section" style={{ backgroundImage: `url(${backgroundIcon}), linear-gradient(180deg, rgb(0, 113, 198) 0%, rgb(164, 164, 164) 100%)` }}>
            <div className="login-background-section-background">
                <div className="login-background-section-background-image" style={{ backgroundImage: `url(${background})` }}></div>
            </div>
            <div className="login-section">
                <div className="login-section-box">
                    <Logo />
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login;
