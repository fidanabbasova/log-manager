import api from './api';

async function getTodaysLogs() {
    return await api.post('/getTodaysLog');
}

export default getTodaysLogs;