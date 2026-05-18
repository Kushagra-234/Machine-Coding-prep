import React, { useState } from "react";

const FileExplorerChild = ({ explorerData, AddNode }) => {
  const isFolder = explorerData.type === "folder" ? true : false;
  const [showChild, setShowChild] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [typeAdded, setTypeAdded] = useState("");

  const handleAdd = (id) => {
    // console.log(id);
    AddNode(id, inputVal, typeAdded);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <div className="flex gap-3">
          <button onClick={() => setShowChild(!showChild)}>
            {isFolder ? "🗂️" : "📂"}
          </button>
          <div>{explorerData.name}</div>
        </div>

        {isFolder && (
          <div className="flex gap-5">
            <button
              onClick={() => {
                setShowInput(true);
                setTypeAdded("folder");
              }}
              className="border-black px-2"
            >
              Add Folder
            </button>
            <button
              onClick={() => {
                setShowInput(true);
                setTypeAdded("file");
              }}
              className="border-black px-2"
            >
              Add File
            </button>
          </div>
        )}
      </div>

      {showInput && (
        <div className="flex gap-5">
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="border-black border-2"
          />
          <button onClick={() => handleAdd(explorerData.id)}>Add</button>
        </div>
      )}

      {showChild &&
        explorerData.children &&
        explorerData.children.map((childItem) => {
          return (
            <div className="ml-5">
              {" "}
              <FileExplorerChild AddNode={AddNode} explorerData={childItem} />
            </div>
          );
        })}
    </div>
  );
};

export default FileExplorerChild;
