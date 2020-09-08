


import {useState} from 'react';

function useTextarea(initialValue) {
    const [ value, setValue ] = useState(initialValue);
    const bind = {
        value,
        onChange: event => {
            setValue(event.target.value);
        }
    }
    const reset = () => {
        setValue(initialValue);
    };
    return [value, bind, reset];
}

export default useTextarea;
