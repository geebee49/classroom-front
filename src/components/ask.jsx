import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Styles from "./styles/ask.css";

  
export default function LeaveClassroom() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
          <button className="ask_btn" onClick={handleClickOpen}>
          <a >Ask</a>
          </button>
          
          <Dialog  className="ask_maindialog" onClose={handleClose} aria-labelledby="dialog" open={open}>
          <div className="ask_dialog">
          <button className="close_btn" onClick={handleClose}>
          <CloseIcon />
          </button>
          <div className="ask_title">
            Question
          </div>
            <div > 
            <button className="submit_btn" >
            Submit
            </button>
            </div>
            </div>
          </Dialog>
        </div>
      );
}