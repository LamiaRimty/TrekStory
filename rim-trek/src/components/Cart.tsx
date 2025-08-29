interface Props {
  cartItems: string[];
  onClear: () => void;
}

export const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart Items</div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};
