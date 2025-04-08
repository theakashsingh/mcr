import { useState } from "react";
import "./App.css";
import arrOfComponent from "./utils/ArrayOfComponent";

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [tabData, setTabData] = useState({
     name:"",
     age:"",
     email:"",
     interests:[],
     theme:'dark'
  })

  const ActiveTab = arrOfComponent[currentTab].component;
  const handleChangeComponent = index => {
    setCurrentTab(index);
  };

console.log(tabData);

  return (
    <div className="component-container">
      {arrOfComponent.map((component, index) => (
        <span
          key={index}
          className="tab-name"
          onClick={() => handleChangeComponent(index)}
        >
          {component.name}
        </span>
      ))}
      <div className="current-tab">
        <ActiveTab data={tabData} setData={setTabData} />
      </div>
       {currentTab===arrOfComponent.length-1 && <button type="submit">Submit</button>}
    </div>
  );
}

export default App;
