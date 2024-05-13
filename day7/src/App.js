//import "./App.css";
import "./style.css";
import { useState } from "react";
import AddItemList from "./AddItemList";
import SearchItem from "./SearchItem";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
function App() {
  const myStorageLocation = JSON.parse(localStorage.getItem("grocerylist"));

  const [items, setItems] = useState(myStorageLocation);

  const [newItem, setNewItem] = useState();

  const [search, setSearch] = useState();

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = { id, checked: false, item };
    console.log(myNewItem);

    const listItems = [...items, myNewItem];

    console.log(listItems);
    setAndSaveItems(listItems);
  };

  const setAndSaveItems = (newItems) => {
    setItems(newItems);

    localStorage.setItem("grocerylist", JSON.stringify(newItems));
  };

  const handleSubmit = (e) => {
    //console.log("check my submit");
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  return (
    <div className="App">
      <Header title="Shopping List" />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItemList
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Main
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        setItem={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
