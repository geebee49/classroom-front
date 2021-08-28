import React from 'react';
import Switch from "react-switch";
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function LockClassroom() {
    const [state,setState]=React.useState({checked:true});
    const handleChange = (checked) => {  
        setState({checked});       
    };
    return(
        <div>
        <Switch 
        onChange={handleChange} 
        checked={state.checked}  
        height={40}
        width={70}
        handleDiameter={28}
        borderRadius={'20px'}
        offColor="#ffffff"
        onColor="#92ADB0"
        offHandleColor="#92ADB0"
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