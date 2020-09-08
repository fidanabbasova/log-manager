import React, { useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import useInput from './../../hooks/useInput';
import InputWithIcon from './../../components/InputWithIcon';
import Button from './../../components/Button';
import Feedback from './../../components/Feedback';
import CheckboxWithLabel from './../../components/CheckboxWithLabel';
import login from './../../query/login';
import useCheckbox from '../../hooks/useCheckbox';
import { UserContext } from './../../App';
import { LoadingContext } from './../../App';
import userIcon from './../../img/user-icon.svg';
import eyeIcon from './../../img/eye-icon.svg';
import eyeSlashIcon from './../../img/eye-slash-icon.svg';

function LogoForm() {
    const [message, setMessage] = useState(null);
    const [username, bindUsername, setUsername] = useInput('');
    const [password, bindPassword, setPassword] = useInput('');
    const [remember, bindRemember] = useCheckbox(false);
    const userContext = useContext(UserContext);
    const { setIsAuthed, setUser } = userContext;
    const [cookies, setCookie] = useCookies([null]);
    const loadingContext = useContext(LoadingContext);

    const submit = (event) => {
        event.preventDefault();
        loadingContext.setLoading(1);
        const user = { username, password };
        const signin = login(user);
        signin.then((response) => {
            response = response.data;
            if (response.name && response.surname) {
                if(remember) {
                    setCookie('log', btoa(JSON.stringify(user)), { path: '/' });
                }
                const coded = btoa(JSON.stringify({ name: response.name, surname: response.surname }));
                localStorage.setItem('log', coded);
                setIsAuthed(true);
                setUser({ name: response.name, surname: response.surname });
            }
            loadingContext.setLoading(0);
        })
        .catch((error) => {
            error = error.response.data;
            setMessage(error.message);
            loadingContext.setLoading(0);
        });
    }
    const resetMessage = () => {
        setMessage(null);
    }
    useEffect(()=> {
        if(cookies && cookies.log) {
            try {
                const user  = JSON.parse(atob(cookies.log));
                setUsername(user.username);
                setPassword(user.password);
            }
            catch(error) {}
        }
    }, []);
    return (
        <form className="login-form" autoComplete="off">
            <InputWithIcon input={{ placeholder: 'İstifadəçi adı', autoFocus: '', ...bindUsername, onFocus: resetMessage }} label={'İstifadəçi adı'} icon={userIcon} />
            <InputWithIcon input={{ placeholder: 'Şifrəni daxil edin', ...bindPassword, onFocus: resetMessage }} type={'password'} label={'Şifrə'} icon={eyeIcon} iconAlternative={eyeSlashIcon} />
            <Feedback message={message} />
            <CheckboxWithLabel bind={bindRemember} label={'Yadda saxla'} />
            <Button value={'Daxil ol'} disabled={false} onClick={submit} />
        </form>
    )
}

export default LogoForm;