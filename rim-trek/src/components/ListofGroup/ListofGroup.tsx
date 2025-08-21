import { useState } from "react";
import "./ListofGroup.css";
import styled from "styled-components";

//capitalising 1st letter each word Pascal convention
//css in reacr comp
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 5x 0;
  background: ${(props) => (props.active ? "green" : "none")};
`;

interface props {
  //using interface we can define shape or interface of an obj
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListofGroup({ items, heading, onSelectedItem }: props) {
  const [selectedIndex, setSelectedIndex] = useState(0); //state hook should change selected index over time

  //items = [];

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Countries not found!</p>}
      {/* <List className="list-group"> */}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            key={item}
            onClick={() => {
              setSelectedIndex(index); //should change selected index over time
              onSelectedItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListofGroup;
