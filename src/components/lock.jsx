import React from 'react';
import Switch from "react-switch";
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Styles from "./styles/lock.css";

export default function LockClassroom() {
    const [state,setState]=React.useState({checked:true});
    const handleChange = (checked) => {  
        setState({checked});       
    };
    return(
        <div className="lock">
        <Switch 
        onChange={handleChange} 
        checked={state.checked}  
        height={40}
        width={70}
        handleDiameter={28}
        borderRadius={'20px'}
        offColor="#ffffff"
        onColor="#B0C0C2"
        offHandleColor="#B0C0C2"
        onHandleColor="#ffffff"
        uncheckedIcon={
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 15,
          paddingRight: 2
        }}
        >
        <LockOpenOutlinedIcon />
        </div>
        }
        checkedIcon={
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 15,
          paddingRight: 2
        }}
        >
        <LockOutlinedIcon />
        </div>
        }
        />
        </div>
    );
}