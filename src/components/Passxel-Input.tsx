import { ChangeEvent, useEffect, useState } from "react";
import "../styles/Passxel.css";

const PassxelInput = (props:any) => {
  const onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    props.onInputChange(event);
  }

  return (
    <div className="passxel-input">
        <input type="text" onChange={(event) => onInputChange(event)} placeholder="enter password"/>
    </div>
  )
}


export default PassxelInput;
