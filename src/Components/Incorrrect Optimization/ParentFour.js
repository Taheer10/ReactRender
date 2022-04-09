import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("Tahir");

  const person = {
    fname: "Tony",
    lname: "stark",
  };

  const MemoizedPerson = useMemo(() => person, []);

  const handleclick = () => {};

  const MemoizedHandleClick = useCallback(handleclick, []);

  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setcount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setname("Hussain")}>ChangeName </button>

      {/* <MemoizedChildFive name={name} person={MemoizedPerson}/>  For UseMemo to solve   */}

      {/* for Usecallback way */}
      <MemoizedChildFive name={name} person={MemoizedHandleClick} />
    </div>
  );
};
