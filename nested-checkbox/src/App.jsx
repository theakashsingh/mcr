import { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import dataArray from "./utils/dataArray";

function App() {
  const [checked, setChecked] = useState({})
  return (
    <div>
      <Checkbox data={dataArray}  checked={checked} setChecked={setChecked}/>
    </div>
  );
}

export default App;
