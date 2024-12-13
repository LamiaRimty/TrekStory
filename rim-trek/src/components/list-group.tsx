import { useState } from "react";

//capitalising 1st letter each word Pascal convention

function ListofGroup() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  let items = [
    "Netherlands",
    "Belgium",
    "Luxembourg",
    "Czech",
    "Austria",
    "Italy",
  ];
  //items = [];

  return (
    <>
      <h1>List of my Trek countries </h1>
      {items.length === 0 && <p>Countries not found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListofGroup;
