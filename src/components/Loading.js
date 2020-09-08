import React, { useEffect, Fragment } from 'react';
import loadingIcon from './../img/loading-icon.svg';

function Loading(props) {
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    return (
        <Fragment>
            {
                <div className={"loading-background " + (props.loading === 2 ? "loading-background__blue" : "loading-background loading-background__transparent")}>
                    <img src={loadingIcon} className="loading-background-image" alt=""/>
                </div>
            }
        </Fragment>
    );
}

export default Loading;
