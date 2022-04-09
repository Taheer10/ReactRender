import React, { useContext } from "react";
import { COuntCOntext } from "./ContextParent";

export const ChildA = () => {
  console.log("ChildA Render");
  return (
    <div>
      ChildA
      <ChildB />
    </div>
  );
}; //Memoized declaration helps to eliminate
// the unnecessary render of components which is not necessary to render

export const MemoizedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("ChildB Render");

  return (
    <div>
      ChildB
      <ChildC />
    </div>
  );
};

export const ChildC = () => {
  const count = useContext(COuntCOntext);
  console.log("ChildC Render");

  return <div>ChildC count= {count}</div>;
};
