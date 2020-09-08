import React, { createContext, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './../../components/Header';
import Filter from './Filter';
import Logs from './Logs';
import { UserContext } from './../../App';

export const LogsContext = createContext();

function Dashboard() {
    const [logs, setLogs] = useState([]);
    const userContext = useContext(UserContext);
    if(userContext.isAuthed === false) return <Redirect to='/login' />
    return (
        <LogsContext.Provider value={{ logsState: logs, setLogsState: setLogs }}>
            <Header />
            <div className="dashboard-section">
                <Filter />
                <Logs />
            </div>
        </LogsContext.Provider>
    )
}

export default Dashboard;
