import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [like, setLike] = useState(false);

  const toggle = () => {
    setLike(() => !like);
    onClick();
  };

  if (like) {
    return (
      <FaHeart
        size={80}
        style={{ cursor: "pointer" }}
        color="red"
        onClick={toggle}
      />
    );
  }
  return (
    <FaRegHeart size={80} style={{ cursor: "pointer" }} onClick={toggle} />
  );
};

export default Like;
