import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Main = () => {
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
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                onChange={() => handelCheck(item.id)}
                type="checkbox"
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handelCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handelDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Main;
