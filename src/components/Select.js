import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ArrowDropDownIcon from './ArrowDropDownIcon';

function SelectInput(props) {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="select-box">
            <label className="label">{props.label}</label>
            <Select
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            value={props.select.value}
            onChange={props.select.bindValue.onChange}
            displayEmpty
            className={'select'}
            IconComponent={() => <ArrowDropDownIcon className={ 'arrow-icon' + (open === false ? '' : ' arrow-icon__rotate')} />}
            inputProps={{ 'aria-label': 'Without label', 'className' : 'selected' + (props.select.value === 'All' ? '' : ' selected__default') }}
            >          
                <MenuItem value={'All'}>All</MenuItem>
                {
                    props.items.map((item, index) => (
                        <MenuItem value={item.key} key={index}>{item.value}</MenuItem>
                    ))
                }
            </Select>
        </div>
    );
}

export default SelectInput;