import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Contact from "./Contact";
import Termsandservice from "./Termsandservice";
import { Route, Routes } from "react-router-dom";
import Privacy from "./Privacy";
import Jobserach from "./Jobserach";
import Joblist from "./Joblist";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Joblist" element={<Joblist />}></Route>
        <Route path="/Jobsearch" element={<Jobserach />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Termsandservice" element={<Termsandservice />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
