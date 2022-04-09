import React, { useState } from "react";
import { Child } from "./Child";

export const Parent = ({ children }) => {
  const [count, setcount] = useState(0);
  console.log("Parent Render");
  return (
    <div>
      <button onClick={() => setcount((c) => c + 1)}>
        Parent count -{count}
      </button>
      {children}
    </div>
  );
};
