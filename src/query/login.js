import api from './api';

async function login(user) {
    const response = await api.post('/user/auth', user)
    return response;
}

export default login;