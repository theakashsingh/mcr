import './App.css'
import FileExplorer from './component/fileExplorer'
import data from './data.json'

function App() {

  return (
    <>
     <FileExplorer file={data}/>
    </>
  )
}

export default App
