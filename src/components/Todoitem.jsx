import React, { useState } from "react";

function Todoitem(props) {
  const [isClick, setClick] = useState(false);
  function handleClick() {
    return setClick((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isClick ? "line-through" : null }}
    >
      {props.text}
    </li>
  );
}

export default Todoitem;
