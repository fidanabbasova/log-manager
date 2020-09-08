import React from 'react';

function Button(props) {
    return (
        <button className={`button button--form ${!props.active || props.active === true ? 'button button--form__active' : ''}`} onClick={props.onClick} disabled={props.disabled && true} type={props.type && props.type}>
            {props.icon && props.icon}
            {props.value}
        </button>
    )
}

export default Button;
