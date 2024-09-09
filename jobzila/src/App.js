import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Termsandservice from "./components/Termsandservice";
import { Route, Routes } from "react-router-dom";
import Privacy from "./components/Privacy";
import Jobserach from "./components/Jobserach";
import Joblist from "./components/Joblist";
import Addjob from "./components/Addjob";
import Jobpage from "./components/Jobpage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Joblist" element={<Jobpage />}></Route>
        <Route path="/Jobsearch" element={<Jobserach />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Addjob" element={<Addjob />}></Route>
        <Route path="/Termsandservice" element={<Termsandservice />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
