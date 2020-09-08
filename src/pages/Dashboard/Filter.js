import React, { useState, useContext, useEffect } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import Input from './../../components/Input';
import Select from './../../components/Select';
import useInput from './../../hooks/useInput';
import useSelect from './../../hooks/useSelect';
import useTextarea from './../../hooks/useTextarea';
import Textarea from './../../components/Textarea';
import DatePicker from './../../components/DatePicker';
import Button from './../../components/Button';
import getTodaysLogs from './../../query/getTodaysLogs';
import getLogs from './../../query/getLogs';
import { LogsContext } from './Dashboard';
import { LoadingContext } from './../../App';

function Filter() {
    const [requestKey, bindRequestKey, setRequestKey, resetRequestKey] = useInput('');
    const [ip, bindIp, setIp, resetIp] = useInput('');
    const [requestPath, bindRequestPath, setRequestPath, resetRequestPath] = useInput('');
    const [logText, bindLogText, resetLogText] = useTextarea('');
    const [logAction, bindLogAction, resetLogAction] = useSelect('All');
    const [logLevel, bindLogLevel, resetLogLevel] = useSelect('All');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [active, setActive] = useState(false);
    const logsContext = useContext(LogsContext);
    const loadingContext = useContext(LoadingContext);

    const showTodaysLogs = () => {
        loadingContext.setLoading(1);
        setActive(false);
        resetRequestKey();
        resetIp();
        resetRequestPath();
        resetLogText();
        resetLogAction();
        resetLogLevel();
        setFromDate(new Date());
        setToDate(new Date());
        const todaysLogs = getTodaysLogs();
        todaysLogs.then(response => {
            logsContext.setLogsState(response.data);
            loadingContext.setLoading(0);
        })
            .catch((error) => {
                logsContext.setLogsState([]);
                loadingContext.setLoading(0);
            });
    }

    const showLogs = () => {
        loadingContext.setLoading(1);
        setActive(true);
        let params = { requestKey, ip, requestPath, logText, logAction, logLevel, fromDate, toDate };
        const checkInput = (name) => {
            if (eval(name).trim().length === 0) {
                params[name] = null;
            }
            else {
                params[name] = eval(name).trim();
            }
        }
        const checkSelect = (name) => {
            if (eval(name) === 'All') {
                params[name] = null;
            }
        }
        const formatDate = (name) => {
            params[name] = moment(eval(name)).format('DD.MM.YYYY');
        }
        checkInput('requestKey');
        checkInput('ip');
        checkInput('requestPath');
        checkInput('logText');
        checkSelect('logAction');
        checkSelect('logLevel');
        formatDate('fromDate');
        formatDate('toDate');
        const logs = getLogs(params);
        logs.then(response => {
            logsContext.setLogsState(response.data);
            loadingContext.setLoading(0);
        })
            .catch((error) => {
                logsContext.setLogsState([]);
                loadingContext.setLoading(0);
            });
    }

    useEffect(() => {
        showTodaysLogs();
    }, []);

    return (
        <div className="filter-section">
            <Input input={{ placeholder: 'All', autoFocus: '', ...bindRequestKey }} label={'Request Key'} set={setRequestKey} reset={resetRequestKey} />
            <Input input={{ placeholder: 'All', ...bindIp }} label={'Ip'} set={setIp} reset={resetIp} />
            <Input input={{ placeholder: 'All', ...bindRequestPath }} width={2} label={'Request Path'} set={setRequestPath} reset={resetRequestPath} />
            <Textarea input={{ placeholder: 'All', ...bindLogText }} label={'Request Text'} reset={resetLogText} />
            <Select label={'Log Action'} items={[
                { key: 'REQUEST', value: 'Request' },
                { key: 'RESPONSE', value: 'Response' }
            ]} select={{ value: logAction, bindValue: bindLogAction, resetValue: resetLogAction }}
            />
            <Select label={'Log Level'} items={[
                { key: 'INFO', value: 'Info' },
                { key: 'WARM', value: 'Warning' },
                { key: 'ERROR', value: 'Error' }
            ]} select={{ value: logLevel, bindValue: bindLogLevel, resetValue: resetLogLevel }}
            />
            <DatePicker label={'From date'} selectedDate={fromDate} setSelectedDate={setFromDate} />
            <DatePicker label={'To date'} selectedDate={toDate} setSelectedDate={setToDate} />
            <Button value={'Search'} type={'button'} active={active} disabled={false} onClick={showLogs} icon={<FontAwesomeIcon icon={faSearch} className="button-icon" />} />
            <Button value={'Today\'s Logs'} type={'button'} active={!active} disabled={false} onClick={showTodaysLogs} icon={<FontAwesomeIcon icon={faCalendarDay} className="button-icon" />} />
        </div>
    )
}

export default Filter;
