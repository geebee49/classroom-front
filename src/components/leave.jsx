import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Styles from "../styles/leave.css";

  
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
          <button className="leave_btn" onClick={handleClickOpen}>
          <ExitToAppIcon />
          <a className="leave_txt">Leave Classroom</a>
          </button>
          
          <Dialog  className="leave_maindialog" onClose={handleClose} aria-labelledby="dialog" open={open}>
          <div className="leave_dialog">
          <button className="close_btn" onClick={handleClose}>
          <CloseIcon />
          </button>
          <div className="leave_title">
            Click here to download the attendance report
          </div>
            <div >
            <button className="download_btn" >
            Download
            </button>
            </div>
            <div > 
            <button className="exit_btn" >
            Exit
            </button>
            </div>
            </div>
          </Dialog>
        </div>
      );
}