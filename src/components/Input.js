import React from 'react';

function Input(props) {
    return (
        <div className={"input-box" + (props.width === 2 ? ' input-box__width-2x' : '')}>
            <label className="label">{props.label}</label>
            <input type={props.type && props.type !== 'password' ? props.type : 'text' } className={`input ${ props.type ? 'input__pasword' : ''} `} {...props.input}/>
        </div>
    )
}

export default Input;
