import React from 'react'

const Settings = ({data,setData}) => {

  const {theme} = data
  const themeArr=['dark','light']
  const handleTheme = (e)=>{
     setData(prev=>({...prev,theme:e.target.name}))
  }
  return (
    <div>
       {themeArr.map((currTheme, index) => (
        <div key={index}>
          <input
            type="radio"
            name={currTheme}
            checked={theme===currTheme}
            onChange={handleTheme}
          ></input>
          <label htmlFor="">{currTheme}</label>
        </div>
      ))}
    </div>
  )
}

export default Settings