
import api from './api';

async function getLogs(request) {
    return await api.post('/getLog', request);
}

export default getLogs;