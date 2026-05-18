import React, { useState } from "react";
import FileExplorerChild from "./FileExplorerChild";

const explorerDataobj = {
  id: 1,
  name: "root",
  type: "folder",
  children: [
    {
      id: 2,
      name: "src",
      type: "folder",
      children: [
        {
          id: 3,
          name: "components",
          type: "folder",
          children: [
            {
              id: 4,
              name: "FileExplorer.tsx",
              type: "file",
            },
            {
              id: 5,
              name: "Sidebar.tsx",
              type: "file",
            },
          ],
        },
        {
          id: 6,
          name: "hooks",
          type: "folder",
          children: [
            {
              id: 7,
              name: "useToggle.ts",
              type: "file",
            },
          ],
        },
        {
          id: 8,
          name: "App.tsx",
          type: "file",
        },
      ],
    },
    {
      id: 9,
      name: "public",
      type: "folder",
      children: [
        {
          id: 10,
          name: "favicon.ico",
          type: "file",
        },
      ],
    },
    {
      id: 11,
      name: "package.json",
      type: "file",
    },
    {
      id: 12,
      name: "README.md",
      type: "file",
    },
  ],
};

const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorerDataobj);

  const AddNode = (parentId, inputVal, type) => {
    console.log(parentId);
    const newNode = {
      id: Date.now(),
      name: inputVal,
      type: type,
      children: type === "folder" ? [] : undefined,
    };

    setExplorerData((prev) => insertNode(prev, parentId, newNode));
  };

  const insertNode = (parentData, parentId, newNode) => {
    if (parentData.id === parentId) {
      return { ...parentData, children: [...parentData.children, newNode] };
    } else if (parentData.children) {
      return {
        ...parentData,
        children: parentData.children.map((childItem) => {
          return insertNode(childItem, parentId, newNode);
        }),
      };
    }
    return parentData;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h3>File Explorer</h3>
      <FileExplorerChild AddNode={AddNode} explorerData={explorerData} />
    </div>
  );
};

export default FileExplorer;
