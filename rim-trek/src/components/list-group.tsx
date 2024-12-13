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

  return (
    <>
      <h1>List of my Trek countries </h1>
      {items.length === 0 && <p>Countries not found!</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("Clicked")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListofGroup;
