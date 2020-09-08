import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function CheckboxWithLabel(props) {
  return (
    <div className="checkbox-container" onClick={props.bind.onChange}>
      <Checkbox
        {...props.bind}
        className="checkbox"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <span className="checkbox-container-label">{props.label}</span>
    </div>

  );
}

export default CheckboxWithLabel;