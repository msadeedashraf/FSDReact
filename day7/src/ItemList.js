import React from "react";

import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({ items, handelCheck, handelDelete }) => {
  console.log(items);
  return (
    <ul>
      {items.map((item) => (
        <li className="item">
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
  );
};

export default ItemList;
