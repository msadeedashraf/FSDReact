//import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  /*
  const [emotion, setEmotion] = useState("happy");

  //useEffect ( ()=> {}, []   );

  useEffect(() => {
    console.log(`My initial emotion is ${emotion} `);
  }, [emotion]);
*/
  return (
    <div className="App">
      {/* <h1>Current emotion is {emotion}</h1>

      <button onClick={() => setEmotion("Sad")}>Sad</button>
      <button onClick={() => setEmotion("Excited")}>Excited</button> */}

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
