/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";
const FileExplorer = ({ file, handleCreateFile,  handleDeleteNode}) => {
  const [expand, setExpand] = useState(false);
  const [create, setCreate] = useState(false);
  const [typeCreate,setTypeCreate]=useState(false)


  const CREATE_FOLDER_ICON =
    "https://cdn-icons-png.flaticon.com/512/10485/10485953.png";

  const CREATE_FILE_ICON="https://cdn-icons-png.flaticon.com/512/6853/6853377.png"

  const DELETE_ICON ="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"

    const handleInput =(e,id,type)=>{
       handleCreateFile(e,id,type)
       setCreate(false)
    }

    const handleFileType=()=>{
        setCreate(true)
        setTypeCreate(false)
    }
    const handleFolderType=()=>{
        setCreate(true)
        setTypeCreate(true)
    }
  return (
    <div>
      {file.isFolder ? (
        <div className="file">
          <div style={{ cursor: "pointer" }}>
            {/* Expand button */}
            <span onClick={() => setExpand(!expand)}>
              {expand ? "🔽" : "▶️"}
            </span>{" "}
            {file.name}{" "}

            {/* Crete File Icon */}
            {!create && (
              <img
                src={CREATE_FOLDER_ICON}
                alt="create folder icon"
                srcSet=""
                onClick={handleFolderType}
                width={15}
                height={15}
                style={{background:"whitesmoke"}}
                />
              )}
            {!create && (
              <img
              src={CREATE_FILE_ICON}
              alt="create file icon"
              srcSet=""
              onClick={handleFileType}
              width={15}
              height={15}
              style={{background:"whitesmoke",marginLeft:"5px"}}
              />
            )}

            {/* Create File Name Input */}
            {create && (
              <input type="text" onBlur={e => handleInput(e, file.id,typeCreate)} />
            )}{" "}
             <img
                src={DELETE_ICON}
                alt="create folder icon"
                srcSet=""
                onClick={()=>handleDeleteNode(file.id)}
                width={15}
                height={15}
                style={{background:"whitesmoke"}}
                />
          </div>
          {file.children?.map(
            data =>
              expand && (
                <FileExplorer
                  key={data.id}
                  file={data}
                  handleCreateFile={handleCreateFile}
                  handleDeleteNode={handleDeleteNode}
                />
              )
          )}
        </div>
      ) : (
        <div className="page">📄 {file.name} <img
        src={DELETE_ICON}
        alt="create folder icon"
        srcSet=""
        onClick={()=>handleDeleteNode(file.id)}
        width={15}
        height={15}
        style={{background:"whitesmoke"}}
        /></div>
      )}
    </div>
  );
};

export default FileExplorer;
