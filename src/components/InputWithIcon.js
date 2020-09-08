import React, { useState } from 'react';

function InputWithIcon(props) {
    let [ hidden, setHidden ] = useState(true);
    return (
        <div className={"input-box" + (props.width === 2 ? ' input-box__width-2x' : '')}>
            <label className="label">{props.label}</label>
            <input type={props.type && props.type !== 'password' ? props.type : 'text' } className={`input input__with-icon ${ props.type && hidden ? 'input__pasword' : ''} `} {...props.input}/>
            <div className="input-icon-container" onClick={(props.type === 'password') ? () => { setHidden(!hidden) } : () => {} }>
                <img src={hidden ? props.icon : props.iconAlternative} alt=""/>
            </div>
        </div>
    )
}

export default InputWithIcon;
