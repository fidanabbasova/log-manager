import React from 'react';
import Alert from '@material-ui/lab/Alert';

function AlertInfo(props) {
  return (
  <Alert className="alert" severity="info">{props.content}</Alert>
  );
}

export default AlertInfo;
