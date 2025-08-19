import { useState } from "react";
import "./ListofGroup.css";
import styled from "styled-components";

//capitalising 1st letter each word Pascal convention

interface props {
  //using interface we can define shape or interface of an obj
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListofGroup({ items, heading, onSelectedItem }: props) {
  const [selectedIndex, setSelectedIndex] = useState(-1); //state hook should change selected index over time

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
              setSelectedIndex(index); //should change selected index over time
              onSelectedItem(item);
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
