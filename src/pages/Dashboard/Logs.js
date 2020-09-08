import React, { useState, useContext, Fragment } from 'react';
import PaginationButtons from './../../components/PaginationButtons';
import AlertInfo from './../../components/Alert';
import TransitionModal from './../../components/TransitionModal';
import { LogsContext } from './Dashboard';

function Logs() {
    const logCountPage = 10;
    const logs = useContext(LogsContext).logsState;
    const pageCount = Math.ceil(logs.length / logCountPage);
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [log, setLog] = useState({});

    const openModal = (log) => {
        setLog(log);
        setOpen(true);
    }

    return (
        <div className="logs-section">
            {
                !logs || logs.length === 0 ?
                    <AlertInfo content={'Daxil etdiyiniz məlumatlara uyğun heç bir nəticə tapılmadı. Xahiş edirik yenidən cəhd edəsiniz.'}/>
                    :
                    <Fragment>
                        <TransitionModal open={open} setOpen={setOpen} log={log} />
                        <table className="table">
                            <thead>
                                <tr className="row row__head">
                                    <th className="col col__head col__width-2x">ID</th>
                                    <th className="col col__head col__width-1x">Request Key</th>
                                    <th className="col col__head col col__width-1x">Ip</th>
                                    <th className="col col__head col col__width-3x">Request Path</th>
                                    <th className="col col__head col col__width-1x">Log Action</th>
                                    <th className="col col__head col col__width-3x">Log Text</th>
                                    <th className="col col__head col col__width-1x">Log Level</th>
                                    <th className="col col__head col col__width-2x">Log Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    logs.slice((page - 1) * logCountPage, page * logCountPage).map((log, index) => (
                                        <tr className="row" key={index} onDoubleClick={() => { openModal(log) }}>
                                            <td className="col col__width-2x">{log.id}</td>
                                            <td className="col col__width-1x">{log.requestKey}</td>
                                            <td className="col col__width-1x">{log.ip}</td>
                                            <td className="col col__width-3x">{log.requestPath}</td>
                                            <td className="col col__width-1x">{log.logAction}</td>
                                            <td className="col col__width-3x">{log.logText}</td>
                                            <td className="col col__width-1x">{log.logLevel}</td>
                                            <td className="col col__width-2x">{log.logDate}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="pagination-container">
                            <PaginationButtons page={page} updatePage={setPage} pageCount={pageCount} />
                        </div>
                    </Fragment>
            }

        </div>
    )
}

export default Logs
