import axios from 'axios';
const url = {
    testServer: 'https://mobile2.turanbank.az/logapi/',
    proServer: 'https://mobile.turanbank.az/logapi/'
}
const api = axios.create({ baseURL: url.proServer});
export default api;
