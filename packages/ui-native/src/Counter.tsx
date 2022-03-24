import * as React from "react";
import { Text, View } from "react-native";
import { Button } from ".";

export function Counter() {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <View>
      <Text>{counter}</Text>
      <Button title="increment" onPress={increment} />
      <Button title="decrement" onPress={decrement} />
    </View>
  );
}
