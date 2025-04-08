import React from "react";

const Profile = ({ data, setData }) => {
  const handleChangeData = e => {
    setData(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <div>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          value={data.name}
          name="name"
          onChange={handleChangeData}
        ></input>
      </div>
      <div>
        <label htmlFor="">Age:</label>
        <input
          type="text"
          value={data.age}
          name="age"
          onChange={handleChangeData}
        ></input>
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input
          type="text"
          value={data.email}
          name="email"
          onChange={handleChangeData}
        ></input>
      </div>
    </div>
  );
};

export default Profile;
