import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Pizza Margarita",
    toppings: ["Mashroom"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Tomato"],
    });
  };
  return (
    <div>
      <h3>Pizza Name : {pizza.name}</h3>
      <h3>Pizza Toppings: {pizza.toppings.join(",")}</h3>
      <button onClick={handleClick}>Add toppings</button>
    </div>
  );
}

export default App;
