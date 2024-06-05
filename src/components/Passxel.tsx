import { ChangeEvent, useEffect, useState } from "react";
import "../styles/Passxel.css";
import PassxelInput from "./Passxel-Input";
import PassxelResult from "./Passxel-Result";
import { CalculatePassStrength } from "./utils/Utils";
import { ZxcvbnResult } from "@zxcvbn-ts/core";
import copy_icon from "../assets/copy.svg";


const Passxel = () => {
  const [inputPassword, setInputPassword] = useState<string|any>("");
  const [passAnalysis, setPassAnalysis] = useState<ZxcvbnResult|any>({});
  const [isCopied, setIsCopied] = useState<any>({password: false, analysis:false});

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
    // console.log(event.target.value);
  }

  useEffect(() => {
    const result:ZxcvbnResult = CalculatePassStrength(inputPassword);
    result.guesses > 1 ? setPassAnalysis(result) : setPassAnalysis(null);
    console.log(result);
  }, [inputPassword])


  const copyToClipboard = (option:string) => {
    let data = option === "password" ? inputPassword : passAnalysis;
    if(option === "password") {
      setIsCopied((prevState:any) => ({...prevState, password: !prevState.password}) );
    } else {
      setIsCopied((prevState:any) => ({...prevState, analysis: !prevState.analysis}) );
    }

    navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(() => {
      setTimeout(() => {
        setIsCopied((prevState:any) => ({...prevState, password:false, analysis:false}) );
      }, 1300);
    })
  }


  
  return (
    <div className="passxel-container">
        <div className="heading">
          <span id="glow">PASS</span><span id="blink">XEL</span>
        </div>
        <PassxelInput onInputChange={handleInputChange} />
        <PassxelResult passAnalysis={passAnalysis} />

        { passAnalysis && 
          <div className="result-actions">
            <button className="action-btn" onClick={() => copyToClipboard('password')}>
              { isCopied.password ? <div className="copied-msg"><img className="copy-icon" src={copy_icon} alt="copy" /><span>copied</span></div> : <span>copy password</span>  }
            </button>

            <button className="action-btn" onClick={() => copyToClipboard('analysis')}>
              { isCopied.analysis ? <div className="copied-msg"><img className="copy-icon" src={copy_icon} alt="copy" /><span>copied</span></div> : <span>copy analysis</span>  }
            </button>
          </div>
        }
    </div>
  )

  
}


export default Passxel;