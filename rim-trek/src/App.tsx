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
  return (
    <div>
      <ListofGroup items={items} heading="Trek countries" />
    </div>
  );
}

export default App;
