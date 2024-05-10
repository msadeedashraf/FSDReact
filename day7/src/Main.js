import React from "react";
import ItemList from "./ItemList";

const Main = ({ items, handelDelete, handelCheck }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handelDelete={handelDelete}
          handelCheck={handelCheck}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Main;
