import React from "react";
import { ChildA } from "./Components/ReactContext/ContextChildren";
import { ContextParent } from "./Components/ReactContext/ContextParent";

function App() {
  return (
    <div className="App">

    <ContextParent>
        <ChildA/>
      </ContextParent>   

 </div>
  );
}

export default App;
