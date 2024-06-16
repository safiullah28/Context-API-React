import React, { createContext } from "react";
import ChildA from "./childA";

let data1 = createContext();
let data2 = createContext();

function App() {
  const name = "Safiullah";
  const age = 21;
  return (
    <div>
      <data1.Provider value={name}>
        <data2.Provider value={age}>
          <ChildA />

          <h2></h2>
        </data2.Provider>
      </data1.Provider>
    </div>
  );
}

export default App;
export { data1, data2 };

//Create
//Provider
// User
