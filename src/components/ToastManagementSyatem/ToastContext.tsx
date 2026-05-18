import { createContext, useContext, useState } from "react";
import React from "react";

export const ToastContext = createContext<any>(null);

const ToastProvider = ({ children }) => {
  const positionList = {
    topLeft: { top: 10, left: 10 },
    topRight: { top: 10, right: 10 },
    bottomRight: { bottom: 10, right: 10 },
    bottomLeft: { bottom: 10, left: 10 },
  };
  const [toastArray, setToastArray] = useState<any[]>([]);
  const [position, setPosition] = useState(positionList.topLeft);

  const addToast = ({ type, text, position }) => {
    const id = Date.now();

    const newToast = {
      id: id,
      type,
      text,
      position,
    };

    setToastArray((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToastArray((oldArray) =>
        oldArray.filter((toastItem) => toastItem.id !== id)
      );
      //   setToastArray(newArray);
    }, 2000);
  };

  return (
    <ToastContext.Provider value={{ addToast, toastArray, positionList }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
