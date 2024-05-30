import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import { useState, useCallback } from "react";
import React from "react";
function ChildComponent({ onClick }) {
  console.log("Child component is rendered");
  return (
    <>
      <button onClick={onClick}> Click me </button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState("My initial text");

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);

  return (
    <div className="App">
      <p> Text: {txt} </p>
      <p> Count: {count} </p>
      <button onClick={() => setTxt("This is the new text")}>Set Text</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={incrementCount} />

      {/*
    
    <Header />
    <Main />
    <Footer />
    
    */}
    </div>
  );
}

export default App;
