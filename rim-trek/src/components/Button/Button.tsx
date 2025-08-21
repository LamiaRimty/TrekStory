// import styled from "styled-components";
import styles from "./Button.module.css";
interface Props {
  children: string;
  color?: "primary" | "success" | "danger" | "warning";
  onClick: () => void;
}

function Button({ children, onClick, color }: Props) {
  // const classNames = `${styles.button} ${styles[color]}`;
  return (
    // <button type="button" className={ "btn btn-" + color} onClick={onClick}>
    <button
      type="button"
      className={`${styles.btn} ${color ? styles[color] : " "}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
