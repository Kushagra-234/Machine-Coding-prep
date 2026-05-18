import React from "react";
import AutoComplete from "./components/AutoComplete";
import Pollwidget from "./components/Pollwidget";
import CountDownTimer from "./components/CountDownTimer";
import FileExplorer from "./components/fileexplorer/FileExplorer";
import Toast from "./components/ToastManagementSyatem/Toast";
import ToastProvider from "./components/ToastManagementSyatem/ToastContext";

const App = () => {
  return (
    <div className="w-full h-screen">
      {/* <AutoComplete /> */}
      {/* <Pollwidget /> */}
      {/* <CountDownTimer /> */}
      {/* <FileExplorer /> */}
      <ToastProvider>
        <Toast />
      </ToastProvider>
    </div>
  );
};

export default App;
