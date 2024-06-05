import { ChangeEvent, useEffect, useState } from "react";
import "../styles/Passxel.css";

import eye_open_icon from "../assets/eye-open.svg";
import eye_closed_icon from "../assets/eye-closed.svg";


const PassxelInput = (props:any) => {
  const onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    props.onInputChange(event);
  }

  const [showPassword, setShowPassword] = useState(false);

  const onButtonClick = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="passxel-input">
        <input type={ showPassword ? "text" : "password" } onChange={(event) => onInputChange(event)} placeholder="check password strength"/>
        <button onClick={onButtonClick} className="action-btn" id="show-hide-toggle">
          <img src={ showPassword ? eye_open_icon : eye_closed_icon } alt="show/hide password" />
        </button>
    </div>
  )
}


export default PassxelInput;
