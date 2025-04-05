import { useEffect, useRef, useState } from "react";
import "./App.css";

const OTP_DIGIT = 5;
function App() {
  const refOtpArr = useRef([]);
  const [otp, setOtp] = useState(new Array(OTP_DIGIT).fill());

  const handleOnChange = (e, index) => {
    const value = e.target.value
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    value && refOtpArr.current[index+1]?.focus()
  };

  const handleOnKeyDown = (e,index)=>{
      if (e.key==="Backspace" && !e.target.value) {
        refOtpArr.current[index-1]?.focus()
      }
      if (e.key ==="ArrowLeft") {
        refOtpArr.current[index-1]?.focus()
      }
      if (e.key ==="ArrowRight") {
        refOtpArr.current[index+1]?.focus()
      }
  }
  useEffect(() => {
    refOtpArr.current[0]?.focus()
  }, [])
  
  return (
    <div>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="number"
          value={otp[index]}
          className="digit"
          onChange={e => handleOnChange(e, index)}
          onKeyDown={e => handleOnKeyDown(e, index)}
          ref={digit=>refOtpArr.current[index]=digit}
        ></input>
      ))}
    </div>
  );
}

export default App;
