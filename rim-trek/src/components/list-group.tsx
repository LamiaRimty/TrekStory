import { useState } from "react";

//capitalising 1st letter each word Pascal convention

interface props {
  items: string[];
  heading: string;
}

function ListofGroup({ items, heading }: props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = [];

  return (
    <>
      <h1>{heading}</h1>
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
