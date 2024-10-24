import { createContext, useState } from "react";
import React from "react";

import B2 from "./B2";

export const aContext = createContext(null);

const AProvider = aContext.Provider;

const A2Context = () => {
  const [counter, setCounter] = useState(0);
  const [darktheme, setDarkTheme] = useState(false);

  return (
    <AProvider
      value={{
        backgroundColor: darktheme ? "Black" : "white",
        counter: counter,
        darktheme: darktheme,
        setDarkTheme,
        setCounter,
      }}
    >
      <div
        style={{
          backgroundColor: darktheme ? "black" : "white",
          color: darktheme ? "white" : "black",
          minHeight: "100vh",
        }}  
      >
        <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
        <button onClick={() => setDarkTheme((prev) => !prev)}>
          Toggle Theme
        </button>
        <h1>I am A : {counter}</h1>
        <B2 />
      </div>
    </AProvider>
  )
};

export default A2Context
