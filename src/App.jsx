import React from "react";
import AutoComplete from "./components/AutoComplete";
import Pollwidget from "./components/Pollwidget";
import CountDownTimer from "./components/CountDownTimer";
import FileExplorer from "./components/fileexplorer/FileExplorer";
import Toast from "./components/ToastManagementSyatem/Toast";
import ToastProvider from "./components/ToastManagementSyatem/ToastContext";
import EMICalculator from "./components/EMICalculator";

const App = () => {
  return (
    <div className="w-full h-screen">
      {/* <AutoComplete /> */}
      {/* <Pollwidget /> */}
      {/* <CountDownTimer /> */}
      {/* <FileExplorer /> */}
      {/* <ToastProvider>
        <Toast />
      </ToastProvider> */}
      <EMICalculator />
    </div>
  );
};

export default App;
