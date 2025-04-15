import React, { useEffect, useRef, useState } from "react";

const Alphabet = () => {
  const [alphabets, setAlphabets] = useState(new Array(26).fill(''));
  const [error, setError] = useState(null);

  const alphabetRef = useRef([]);

  const handleVerifyAlphabet = (e, index) => {
    const newLetter = e.target.value.slice(-1);
    if (!(newLetter === String.fromCharCode(97 + index)) && e._reactName==="onChange") {
      setError("Typing Error...");
    } else {
      const newValue = [...alphabets];
      newValue[index] = newLetter;
      setAlphabets(newValue);
      setError("");
      newLetter && alphabetRef.current[index + 1]?.focus();
    }
  };

  const handleOnKeyDown = (e, index) => {
    const newValue = [...alphabets];
    newValue[index] = '';
    setAlphabets(newValue);
    if (e.key === "Backspace" && !e.target.value) {
      alphabetRef.current[index - 1]?.focus();
    }
  };
  useEffect(() => {
    alphabetRef.current[0]?.focus();
  }, []);


  return (
    <div className="alphabet-container">

      {alphabets.map((n, index) => (
        <input
          key={index}
          type="text"
          value={n}
          onChange={e => handleVerifyAlphabet(e, index)}
          onKeyDown={e => handleOnKeyDown(e, index)}
          className="alphabet-input"
          ref={alphaRef => (alphabetRef.current[index] = alphaRef)}
        />
      ))}
      {error && <h5 className="error">{error}</h5>}
    </div>
  );
};

export default Alphabet;
