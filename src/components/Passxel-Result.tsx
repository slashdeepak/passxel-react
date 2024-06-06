import { ZxcvbnResult } from "@zxcvbn-ts/core";
import "../styles/Passxel.css";
import hacker_logo from "../assets/hacker-icon.svg";
import { GetScoreDescription } from "./utils/Utils";

const PassxelResult = (props:any) => {
  const result:ZxcvbnResult = props ? props.passAnalysis : null;
  
  
  const getResultItems = () => {
    let result_items = [];
    if(result) {
      result_items.push((<div className="result-item"><span className="label">Score:</span><span className="value">{result.score + " " + GetScoreDescription(result.score) }</span></div>));
    }
    if(result && result.guesses) {
      result_items.push((<div className="result-item"><span className="label">Estimated guesses to crack:</span><span className="value">{result.guesses.toLocaleString("en-US")}</span></div>));
    }
    if(result && result.crackTimesDisplay && result.crackTimesDisplay.onlineThrottling100PerHour) {
      result_items.push((<div className="result-item"><span className="label">Online attack with 100 attempts per hour (throttled):</span><span className="value">{result.crackTimesDisplay.onlineThrottling100PerHour}</span></div>));
    }
    if(result && result.crackTimesDisplay && result.crackTimesDisplay.onlineNoThrottling10PerSecond) {
      result_items.push((<div className="result-item"><span className="label">Online attack with 10 attempts per second (unthrottled):</span><span className="value">{result.crackTimesDisplay.onlineNoThrottling10PerSecond}</span></div>));
    }
    if(result && result.crackTimesDisplay && result.crackTimesDisplay.offlineSlowHashing1e4PerSecond) {
      result_items.push((<div className="result-item"><span className="label">Offline attack with 10k attempts per second (slow-hash):</span><span className="value">{result.crackTimesDisplay.offlineFastHashing1e10PerSecond}</span></div>));
    }
    if(result && result.crackTimesDisplay && result.crackTimesDisplay.offlineFastHashing1e10PerSecond) {
      result_items.push((<div className="result-item"><span className="label">Offline attack with 10g attempts per second (fast-hash):</span><span className="value">{result.crackTimesDisplay.offlineFastHashing1e10PerSecond}</span></div>));
    }
    return result_items;
  }

  return (
    <div className="passxel-result" style={ result ? {borderRadius:'5px'} : {borderRadius:'50%'} }>
      <div className="hacker-logo">
        <img src={hacker_logo} alt="hacker_logo" />
      </div>
      
      <div className="results">
        { getResultItems() }
      </div>
    </div>

  )
}

export default PassxelResult;