//capitalising 1st letter each word Pascal convention

function ListofGroup() {
  const itemlands = [
    "Netherlands",
    "Belgium",
    "Luxembourg",
    "Czech",
    "Austria",
    "Italy",
  ];
  return (
    <>
      <h1>List of my Trek countries </h1>
      <ul className="list-group">
        {itemlands.map((itemland) => (
          <li key={itemland}>{itemland}</li>
        ))}
      </ul>
    </>
  );
}
export default ListofGroup;
