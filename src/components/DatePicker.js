import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { isValid } from 'date-fns';
import { az } from "date-fns/locale";
import calendarIcon from './../img/calendar-icon.svg';

function DatePicker(props) {

  const handleDateChange = (date) => {
    props.setSelectedDate(date);
  };

  return (
    <div className="input-box">
    <label className="label">{props.label}</label>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ az }>
        <KeyboardDatePicker
          format="dd/MM/yyyy"
          value={props.selectedDate}
          cancelLabel={'Geriyə'}
          okLabel={'İrəli'}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          InputProps={{ className: 'datepicker', disabled: true }}
          keyboardIcon={<img className="datepicker-icon" src={calendarIcon} alt=""/>}
        />
    </MuiPickersUtilsProvider>
    </div>
  );
}

export default DatePicker;
