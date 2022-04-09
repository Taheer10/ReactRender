import React, { useState } from "react";
import { MemoizedChildA } from "./ContextChildren";

export const COuntCOntext = React.createContext();
const CountProvider = COuntCOntext.Provider;

export const ContextParent = ({ children }) => {
  const [count, setcount] = useState(0);
  console.log("ContextParent Render");
  return (
    <div>
      <button onClick={() => setcount((c) => c + 1)}>Count - {count}</button>
      <CountProvider value={count}>{children}</CountProvider>
    </div>
  );
};
