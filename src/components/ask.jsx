import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Styles from "../styles/ask.css";

  
export default function LeaveClassroom() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const [qnValue,setqnValue] = React.useState({input : '' });

    const handleChangeQn =(e) => {
      setqnValue({input : e.target.value});
    }

    const [opt1Value,setopt1Value] = React.useState({input : '' });

    const handleChangeOpt1 =(e) => {
      setopt1Value({input : e.target.value});
    }

    const [opt2Value,setopt2Value] = React.useState({input : '' });

    const handleChangeOpt2 =(e) => {
      setopt2Value({input : e.target.value});
    }

    const [opt3Value,setopt3Value] = React.useState({input : '' });

    const handleChangeOpt3 =(e) => {
      setopt3Value({input : e.target.value});
    }

    const handleClickSubmit = () => {
      console.log(qnValue.input);
      console.log(opt1Value.input);
      console.log(opt2Value.input);
      console.log(opt3Value.input);
    }

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
          <input type="textarea" name="question" className="qn-input" onChange={handleChangeQn}/>
          <div className="opt-input-container">
          <input type="textarea" name="opt1" placeholder="Option 1" className="opt-input" onChange={handleChangeOpt1} />
          <input type="textarea" name="opt2" placeholder="Option 2" className="opt-input" onChange={handleChangeOpt2} />
          <input type="textarea" name="opt3" placeholder="Option 3" className="opt-input" onChange={handleChangeOpt3} />
          </div>
            <div > 
            <button className="submit_btn" type="submit" onClick={handleClickSubmit}>
            Submit
            </button>
            </div>
            </div>
          </Dialog>
        </div>
      );
}