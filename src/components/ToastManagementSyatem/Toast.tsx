import React, { useContext, useState } from "react";
import { ToastContext } from "./ToastContext";

const Toast = () => {
  const { addToast, toastArray, positionList } = useContext(ToastContext);

  return (
    <div className="flex flex-col gap-5 h-full justify-center items-center">
      <h3>Toast Management System</h3>
      <button
        onClick={() =>
          addToast({
            type: "success",
            text: "this is a success toast",
            position: "topRight",
          })
        }
        className="border-black border-2 px-2"
      >
        Show Success Toast
      </button>
      <button
        onClick={() =>
          addToast({
            type: "error",
            text: "this is a error toast",
            position: "topRight",
          })
        }
        className="border-black border-2 px-2"
      >
        Show Error Toast
      </button>

      <div className="flex flex-col gap-5">
        {toastArray.map((toastItem, index) => {
          return (
            <div
              style={{ position: "fixed", ...positionList[toastItem.position] }}
            >
              {toastItem.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toast;
