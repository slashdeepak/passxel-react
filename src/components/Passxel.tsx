import { ChangeEvent, useEffect, useState } from "react";
import PassxelInput from "./Passxel-Input";
import PassxelResult from "./Passxel-Result";
import { CalculatePassStrength } from "./utils/Utils";
import { ZxcvbnResult } from "@zxcvbn-ts/core";
import Passxel_Result_Action from "./Passxel-Result-Action";
import { useScramble } from 'use-scramble';
import "../styles/Passxel.css";


const Passxel = () => {
  const [inputPassword, setInputPassword] = useState<string|any>("");
  const [passAnalysis, setPassAnalysis] = useState<ZxcvbnResult|any>({});

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
    // console.log(event.target.value);
  }

  useEffect(() => {
    const result:ZxcvbnResult = CalculatePassStrength(inputPassword);
    result.guesses > 1 ? setPassAnalysis(result) : setPassAnalysis(null);
    console.log(result);
  }, [inputPassword])

  const { ref } = useScramble({
    text: 'PASSXEL',
    speed: 0.2,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 0,
  });



  return (
    <div className="passxel-container">
      <div className="heading">
        <span id="scramble" ref={ref}></span>
      </div>
      <PassxelInput onInputChange={handleInputChange} />
      <PassxelResult passAnalysis={passAnalysis} />
      { passAnalysis && <Passxel_Result_Action inputPassword={inputPassword} passAnalysis={passAnalysis} /> }
    </div>
  )
  
}


export default Passxel;