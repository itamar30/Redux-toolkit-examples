import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";
import { Button, View, Text, StyleSheet } from "react-native";
import AppButton from "../../AppButton";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.text}>{count}</Text>

      <AppButton
        title={"Increment val"}
        onPress={() => dispatch(increment())}
      />
      <AppButton
        title={"decrement val"}
        onPress={() => dispatch(decrement())}
      />
      <AppButton
        title={"increment by 3"}
        onPress={() => dispatch(incrementByAmount(3))}
      />
      <AppButton title={"reset"} onPress={() => dispatch(reset())} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
