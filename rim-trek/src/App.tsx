import { useState } from "react";
function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const handleClick = () => {
    setTags([...tags]); //add
    setTags(tags.filter((tags) => tags! === "happy")); //remove
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
    console.log("Updated Tags ", tags);
  };

  return (
    <div>
      {tags.join(" , ")}
      <button onClick={handleClick}>Update Tags </button>
    </div>
  );
}

export default App;
