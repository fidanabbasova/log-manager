


import {useState} from 'react';

function useInput(initialValue) {
    const [ value, setValue ] = useState(initialValue);
    const bind = {
        value,
        onChange: event => {
            setValue(event.target.value);
        }
    }
    const resetValue = () => {
        setValue(initialValue);
    }
    return [value, bind, setValue, resetValue];
}

export default useInput;
