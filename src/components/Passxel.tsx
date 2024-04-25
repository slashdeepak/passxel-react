import { ChangeEvent, useState } from "react";
import "../styles/Passxel.css";
import PassxelInput from "./Passxel-Input";
import PassxelResult from "./Passxel-Result";
import { CalculatePassStrength } from "./utils/Utils";
import { ZxcvbnResult } from "@zxcvbn-ts/core";


const Passxel = () => {
  const [inputPassword, setInputPassword] = useState<string|any>("");
  const [passAnalysis, setPassAnalysis] = useState<ZxcvbnResult|any>({});

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
    // console.log(event.target.value);

    if(inputPassword) {
        const result:ZxcvbnResult = CalculatePassStrength(inputPassword);
        setPassAnalysis(result);
        // console.log(result);
    }
  }


  return (
    <div className="passxel-container">
        <div className="heading">
          <span id="glow">PASS</span><span id="blink">XEL</span>
        </div>
        <PassxelInput onInputChange={handleInputChange} />
        {/* <PassxelResult passAnalysis={passAnalysis} /> */}
    </div>
  )

}


export default Passxel;