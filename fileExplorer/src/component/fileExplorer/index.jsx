/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";
const FileExplorer = ({ file }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div >
      {file.type === "folder" ? (
        <div className="file">
          <div onClick={() => setExpand(!expand)} style={{cursor:"pointer"}}>📁 {file.name} </div>
          {file.children.map(
            data => expand && <FileExplorer key={data.id} file={data} />
          )}
        </div>
      ) : (
        <div className="page">📄 {file.name}</div>
      )}
    </div>
  );
};

export default FileExplorer;
