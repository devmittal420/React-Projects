import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from './components/1.sidebar-components';z
import React, { useEffect, useState } from 'react';

const PopupUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const escFunction = (event) => {
      console.log("Event: ", event);
      if (event.key === "Escape") {
        console.log("Got Event ESC");
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", escFunction, false);
    console.log("useEffect [] is done");
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const onlineNetwork = () => {
    toast.success("You Are online!");
  };
  const offlineNetwork = () => {
    toast.error("You Are offline!");
  };

  useEffect(() => {
    window.addEventListener("online", onlineNetwork);
    window.addEventListener("offline", offlineNetwork);

    return () => {
      window.removeEventListener("online", onlineNetwork);
      window.removeEventListener("offline", offlineNetwork);
    };
  }, []);

  console.log("isOpen: ", isOpen);
  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Close" : "Open"}
      </button>

      <button onClick={() => setCounter((val) => val + 1)}>
        Increment : {counter}
      </button>
      {isOpen && <SideBar />}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default PopupUI;
