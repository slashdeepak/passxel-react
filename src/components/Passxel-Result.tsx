import { ZxcvbnResult } from "@zxcvbn-ts/core";
import "../styles/Passxel.css";

const PassxelResult = (props:any) => {
  const result:ZxcvbnResult = props ? props.passAnalysis : null;
  
  return (
    <div>Score: {result.score}</div>
  )
}

export default PassxelResult;