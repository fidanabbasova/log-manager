import {useState} from 'react';

function useCheckbox(initialValue) {
    const [ value, setValue ] = useState(initialValue);
    const bind = {
        checked: value,
        onChange: () => {
            setValue(!value);
        }
    }
    return [ value, bind ];
}

export default useCheckbox;