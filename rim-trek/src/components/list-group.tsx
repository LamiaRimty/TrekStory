import { MouseEvent } from "react";

//capitalising 1st letter each word Pascal convention

function ListofGroup() {
  let items = [
    "Netherlands",
    "Belgium",
    "Luxembourg",
    "Czech",
    "Austria",
    "Italy",
  ];
  //items = [];
  function handleClick(event: MouseEvent) {
    console.log(event);
  }

  return (
    <>
      <h1>List of my Trek countries </h1>
      {items.length === 0 && <p>Countries not found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListofGroup;
