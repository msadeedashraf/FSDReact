import React from "react";
import { useState } from "react";

/*
  //Events

const Main = ({ learn }) => {
  


  const myName = () => {
    const name = ["Sadeed", "Amber", "Suzane", "Salah"];
    const n = Math.floor(Math.random() * 4);
    return name[n];
  };

  const myClick = () => {
    console.log("Sadeed pressed the button");
  };

  const mySecondClick = (newName) => {
    console.log(`${newName} pressed the button`);
  };

  const myThirdClick = (e) => {
    //console.log(e);
    console.log(e.target);
    console.log(e.target.innerHTML);
  };

  return (

    //Events
    <main>
      <p> Hello {myName()}</p>

      <button onClick={myClick}>1st Click</button>

      <button onClick={() => mySecondClick("Suze")}>2nd Click</button>
      <button onClick={(e) => myThirdClick(e)}>3rd Click</button>
    </main>
  
);
};
*/

/*
//Passing Props
const Main = (props) => {
return (
  <main>
    <h1> Hello to learning {props.learn} </h1>
  </main>
);
};
*/

/*
//Passing values using Keys
const Main = ({learn}) => {
return (
  <main>
    <h1> Hello to learning {learn} </h1>
  </main>
);
};
*/

//let num1 = 10;

const Main = ({ learn }) => {
  /*
  const abc = useState("Sadeed");
  console.log(abc[0]);
  console.log(abc[1]);
*/
  //Array Destructuring
  /*
  const name = [
    "Sadeed",
    "Amber",
    "Suzane",
    "Salah",
  ];

 console.log(name[2]);
 */

  //Destructure and array
  /*
  const [teacher, studnet1, studnet2, student3] = [
    "Sadeed",
    "Amber",
    "Suzane",
    "Salah",
  ];
  console.log(teacher);
  console.log(student3);
*/
  /*

  const [name, setName] = useState("Sadeed");
  console.log(name);

  const [color, setColor] = useState("Red");
  console.log(color);
*/

  /*
  const myCourse = useState("React");
  //console.log(myCourse);
  //Array destructuring
  const [course, setCourse] = useState("JavaScript");
  console.log(course);

  return (
    <main>
      <h1> Hello to learning {course}</h1>
      <h2> My First course was {course}</h2>
      <button onClick={() => setCourse("TypeScript")}> Change Course </button>
      <button onClick={() => setCourse("React")}> Change Course again </button>
    </main>
  );
  */

  /*
  const [course, setCourse] = useState();
  console.log(course);

  return (
    <main>
      <h1> Hello to learning {course} </h1>
      <button onClick={() => setCourse("JavaScript")}> Change Course </button>
    </main>
  );
  */

  const [course, setCourse] = useState("React");
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const myClick = () => {
    setCount();

    console.log(count);
  };

  console.log(course);
  return (
    <main>
      <h1> Hello to learning {course} </h1>

      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>

      <button onClick={() => setCourse("JavaScript")}> Change Course </button>
      <button onClick={myClick}> click </button>
    </main>
  );
};

export default Main;
