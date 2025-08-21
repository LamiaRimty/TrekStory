import { useState } from "react";

const Like = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      <h1
        style={{ color: liked ? "red" : "black" }} //keeps track of whether the text should be red of black
        onClick={() => setLiked(!liked)} //When you click the <h1>, setIsRed(!isRed) flips the state.
      >
        Like
      </h1>
    </div>
  );
};

export default Like;
