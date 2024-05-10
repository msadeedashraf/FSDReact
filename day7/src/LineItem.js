import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const LineItem = (item, handelCheck, handelDelete) => {
  console.log(item);
  return (
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
  );
};

export default LineItem;
