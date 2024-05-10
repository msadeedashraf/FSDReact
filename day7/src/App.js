//import "./App.css";
import "./style.css";
import { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Bread",
    },
    {
      id: 2,
      checked: false,
      item: "Mangoes",
    },
    {
      id: 3,
      checked: false,
      item: "Apples",
    },
    {
      id: 4,
      checked: false,
      item: "Peaches",
    },
    {
      id: 5,
      checked: false,
      item: "Cake",
    },
  ]);

  const handelCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);

    localStorage.setItem("grocerylist", JSON.stringify(listItems));
  };

  const handelDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    localStorage.setItem("grocerylist", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Shopping List" />
      <Main
        items={items}
        setItem={setItems}
        handelCheck={handelCheck}
        handelDelete={handelDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
