// // import { useEffect, useState } from "react";
// import React, { useState } from "react";
// import TestComp from "./Components/TestComp";
// import { createContext } from "react";

// export const moodContext = createContext();
// export default function App() {
//   // useState hook
//   const [mood, setMood] = useState(false);

//   // useEffect() hook

//   // console.log("re-render triggerred! because of state change of counter");
//   // let [counter, setCounter] = useState(0);
//   // useEffect without any dependency --> componentDidMount() and componentDidUpdate()
//   // And
//   // If we pass an empty array as the second argument, it tells useEffect to nly fire on component load.
//   // useEffect(() => {
//   //   console.log(counter);
//   //   return () => console.log("component is destroyed!!");
//   // });
//   // console.log(counter);

//   // UseContext hook
//   function moodChanger() {
//     setMood(!mood);
//   }

//   return (
//     <div>
//       {/* {counter}
//       {/* {setCounter(counter+1)} */}
//       {/* <button onClick={() => setCounter(++counter)}>click</button> */}
//       {/* <TestComp /> */}

//       <button onClick={() => moodChanger()}>click</button>

//       <moodContext.Provider value={mood}>
//         <TestComp />
//       </moodContext.Provider>
//     </div>
//   );
// }

// useRef hook

import React from "react";
import { useRef, useState, useEffect } from "react";
function App() {
  const [x, Setx] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
      // Every time the component re-renders update the renderCount;
    });
    renderCount.current = renderCount.current + 1;
  return (
    <div>
      {x}
      <button onClick={() => Setx((prevx) => prevx + 1)}>Click</button>
      <div>The app is re-rendered {renderCount.current} times</div>
    </div>
  );
}

export default App;
