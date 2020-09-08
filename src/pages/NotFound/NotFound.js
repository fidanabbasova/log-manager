import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import notFoundIcon from './../../img/not-found-icon.svg';
import { UserContext } from './../../App';

function NotFound() {
    const userContext = useContext(UserContext);
    let back;
    if (userContext.isAuthed === true) {
        back = {
            url: '/dashboard',
            linkName: 'Ana səhifəyə',
            buttonName: 'Ana səhifə'
        }
    }
    else {
        back = {
            url: '/login',
            linkName: 'Giriş səhifəsinə',
            buttonName: 'Giriş'
        }
    }

    return (
        <div className="not-found-section">
            <img src={notFoundIcon} className="not-found-section-icon" alt="" />
            <div className="not-found-section-content">
                <h4 className="text text__large text__bold" >Axtardığınız səhifə tapılmadı</h4>
                <p className="text text__medium">Xəta baş verdi. Yenidən cəhd edin və ya <Link to={back.url} className="text text__blue">{back.linkName}</Link> qayıdın</p>
            </div>
            <Link to={back.url} className="button not-found-section-button">{back.buttonName}</Link>
        </div>
    )
}

export default NotFound;
