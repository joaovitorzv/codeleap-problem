import * as React from "react";
import { Button } from "ui";

interface Person {
  name: string;
}

export function App() {
  const [count, setCount] = React.useState(0);

  const person: Person = { name: "jooa" };

  return (
    <div>
      <h1>
        Byro this: {count} {person.name}
      </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
      <Button onClick={() => setCount((prev) => prev - 1)} />
    </div>
  );
}
