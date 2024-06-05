import { useState } from "react";
import copy_icon from "../assets/copy.svg";


const Passxel_Result_Action = (props:any) => {

  const [isCopied, setIsCopied] = useState<any>({password: false, analysis:false});

  const copyToClipboard = (option:string) => {
    let data = option === "password" ? props.inputPassword : props.passAnalysis;
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
    <div className="result-actions">
      <button className="action-btn" onClick={() => copyToClipboard('password')}>
        { isCopied.password ? <div className="copied-msg"><img className="copy-icon" src={copy_icon} alt="copy" /><span>copied</span></div> : <span>copy password</span>  }
      </button>

      <button className="action-btn" onClick={() => copyToClipboard('analysis')}>
        { isCopied.analysis ? <div className="copied-msg"><img className="copy-icon" src={copy_icon} alt="copy" /><span>copied</span></div> : <span>copy analysis</span>  }
      </button>
    </div>
  )

}

export default Passxel_Result_Action;