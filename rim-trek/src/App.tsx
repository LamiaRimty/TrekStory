import Button from "./components/button";
import Alert from "./components/alert";
import ListofGroup from "./components/ListofGroup";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  let items = [
    "Netherlands",
    "Belgium",
    "Luxembourg",
    "Bulgaria",
    "Czech",
    "Austria",
    "Italy",
    "Spain",
  ];

  const handleSelectedItem = (item: string) => {
    //printing the name of the selected countries
    console.log("Selected contry is: ", item);
  };
  return (
    <div>
      <ListofGroup
        items={items}
        heading="Trek countries"
        onSelectedItem={handleSelectedItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello <strong>World</strong>
        </Alert>
      )}

      <Button color="success" onClick={() => setAlertVisible(true)}>
        Say Hello!
      </Button>
    </div>
  );
}

export default App;
