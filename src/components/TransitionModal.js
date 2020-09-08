import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import closeIcon from './../img/close-icon.svg';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));

function TransitionModal(props) {
  const classes = useStyles();
  const { open, log } = props;

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={`${classes.paper} modal`}>
          <div className="modal-header">
            <h3 className="modal-header-container">
              <span className="modal-header-title">ID:</span>
              <span className="modal-header-text">{log.id}</span>
            </h3>
            <button className="button" onClick={handleClose}>
              <img src={closeIcon} alt=""/>
            </button>
          </div>
          <div className="modal-content">
            <div className="modal-item">
              <span className="modal-item-title text text__medium">Request Key:</span>
              <span className="modal-item-text text text__medium text__light">{log.requestKey}</span>
            </div>
            <div className="modal-item">
              <span className="modal-item-title text text__medium">Ip:</span>
              <span className="modal-item-text text text__medium text__light">{log.ip}</span>
            </div>
            <div className="modal-item">
              <span className="modal-item-title text text__medium">Request Path:</span>
              <span className="modal-item-text text text__medium text__light">{log.requestPath}</span>
            </div>
            <div className="modal-item">
              <span className="modal-item-title text text__medium">Log Action:</span>
              <span className="modal-item-text text text__medium text__light">{log.logAction}</span>
            </div>
            <div className="modal-item">
              <span className="modal-item-title text text__medium">Log Text:</span>
              <span className="modal-item-text text text__medium text__light">{log.logText}</span>
            </div>
            <div className="modal-item">
              <span className="modal-item-title text text__medium">Log Level:</span>
              <span className="modal-item-text text text__medium text__light">{log.logLevel}</span>
            </div>
            <div className="modal-item">
              <span className="modal-item-title text text__medium">Log Date:</span>
              <span className="modal-item-text text text__medium text__light">{log.logDate}</span>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default TransitionModal;