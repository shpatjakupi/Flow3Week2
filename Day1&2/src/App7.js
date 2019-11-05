import React, { useState } from "react";
 
function NumberList({ numbers }) {
    const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
);
function ListItem(props) {
    return <li>{props.value}</li>;
}
return <ul>{listItems}</ul>;
}
function ListDemo(props) {
  console.log(props.numbers)
  return (
    <div>
    <p>Unordered list of numbers</p>
    <NumberList numbers={props.numbers} />
    </div>
  );
}
export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return <ListDemo numbers={numbers} />;
}
