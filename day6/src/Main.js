import React from "react";

const Main = () => {
  const myName = () => {
    const name = ["Sadeed", "Amber", "Suzane", "Salah"];
    const n = Math.floor(Math.random() * 4);
    return name[n];
  };

  const myClick = () => {
    console.log("You pressed the button");
  };

  return (
    <main>
      <p> Hello {myName()}</p>
      <button onClick={myClick}>Click Me</button>
    </main>
  );
};

export default Main;
