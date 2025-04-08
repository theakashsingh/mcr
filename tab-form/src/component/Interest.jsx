import React from "react";

const Interest = ({ data, setData }) => {
  const { interests } = data;
  const interestArr = ["cricket", "art", "coding", "traveling"];

  const handleCheckbox = e => {
    const value = e.target.name;
    const newInterestArr = interests.includes(value)
      ? interests.filter(interest => interest !== value)
      : [...interests, value];
    setData(prev => ({ ...prev, interests: [...newInterestArr] }));
  };
  return (
    <div>
      {interestArr.map((interest, index) => (
        <div key={index}>
          <label htmlFor="">
            <input
              type="checkbox"
              name={interest}
              checked={interests.includes(interest)}
              onChange={handleCheckbox}
            ></input>
            {interest}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Interest;
