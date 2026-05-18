import React from "react";
import AutoComplete from "./components/AutoComplete";
import Pollwidget from "./components/Pollwidget";
import CountDownTimer from "./components/CountDownTimer";
import FileExplorer from "./components/fileexplorer/FileExplorer";

const App = () => {
  return (
    <div className="w-full h-screen">
      {/* <AutoComplete /> */}
      {/* <Pollwidget /> */}
      {/* <CountDownTimer /> */}
      <FileExplorer />
    </div>
  );
};

export default App;
