let count = 0;
function Message() {
  count++;
  console.log("Message called", count);

  return <div>Message {count}</div>;
}
export default Message;
