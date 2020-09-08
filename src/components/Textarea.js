import React from 'react';

function Textarea(props) {
    return (
        <div className="textarea-box">
            <label className="label">{props.label}</label>
            <textarea className="textarea" {...props.input}></textarea>
        </div>
    )
}

export default Textarea;
