import { useState } from "react";
import "./App.css";
import FileExplorer from "./component/fileExplorer";
import data from "./data.json";

function App() {
  const [file, setFile] = useState(data);

  const handleCreateFile = (e, id, isFolder) => {
    if(!e.target.value)return 
    const newNode = {
      id: String(Math.floor(Math.random() * 10000)),
      name: e.target.value,
      isFolder: isFolder,
      children: isFolder ? [] : undefined,
    };
  
    const updateNode = (nodeList) => {
      return nodeList.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            children: [...(node.children || []), newNode],
          };
        } else if (node.children && node.children.length > 0) {
          return {
            ...node,
            children: updateNode(node.children),
          };
        }
        return node;
      });
    };
  
    setFile((prev) => {
      if (prev.id === id) {
        // Root node match
        return {
          ...prev,
          children: [...(prev.children || []), newNode],
        };
      }
  
      return {
        ...prev,
        children: updateNode(prev.children),
      };
    });
  };
  
 

  const handleDeleteNode = (id) =>{
    console.log('ID',id);
    
        const updateTree = (nodeList) =>{
              return nodeList.filter(node=>node.id !== id).map((child)=>{
                if (child.children) {
                  return {...child,children:updateTree(child.children)}
                }
                return child
              })
        }
        setFile((prev) => {
          if (prev.id === id) {
            // Root node match
            return {};
          }
      
          return {
            ...prev,
            children: updateTree(prev.children),
          };
        });

  }
  
  
  return (
    <>
      <FileExplorer file={file} handleCreateFile={handleCreateFile} handleDeleteNode={handleDeleteNode}/>
    </>
  );
}

export default App;
