import ListofGroup from "./components/list-group";

function App() {
  let items = [
    "Netherlands",
    "Belgium",
    "Luxembourg",
    "Czech",
    "Austria",
    "Italy",
  ];

  const handleSelectedItem = (item: string) => {
    console.log("Selected contry is: ", item);
  };
  return (
    <div>
      <ListofGroup
        items={items}
        heading="Trek countries"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
