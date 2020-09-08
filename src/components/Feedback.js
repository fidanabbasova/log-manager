import React from 'react';

function Feedback(props) {
    return (
        <div className="feedback">
            <span className="feedback-text">{props.message}</span>
        </div>
    )
}

export default Feedback;
