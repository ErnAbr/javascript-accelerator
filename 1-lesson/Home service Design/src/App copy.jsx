import { useEffect, useState } from "react";
import { MyButton } from "./Button";

function App() {
  console.log("generuojamas komponentas");
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(12);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  useEffect(
    function onCountChange() {
      console.log("test");
    },
    [count]
  );

  return (
    <div>
      <h1>My component</h1>
      <article>
        <h2>count</h2>
        <MyButton onClick={increaseCount}>add</MyButton>
        <MyButton onClick={decreaseCount}>subtract</MyButton>
        <p>count: {count}</p>
      </article>
    </div>
  );
}

export default App;
