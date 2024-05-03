import React from "react";

function Main() {
  const myName = () => {
    const name = ["Sadeed", "Amber", "Suzane", "Salah"];
    const n = Math.floor(Math.random() * 4);
    return name[n];
  };

  return (
    <section>
      <h3> {myName()} is learning to code</h3>

      <img width={300} height={200} src="/images/coding.jpg" alt="" />
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </section>
  );
}

export default Main;
