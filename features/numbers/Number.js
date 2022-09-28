import { Button, View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addELem, removeElem, emptyArr } from "./numberSlice";
import AppButton from "../../AppButton";

export default function Number() {
  const numArr = useSelector((state) => state.number.numArr);
  const dispatch = useDispatch();

  return (
    <View style={styles.buttonContainer}>
      {numArr.length > 0 && <Text style={styles.text}>[ {numArr} ]</Text>}
      {numArr.length === 0 && <Text style={styles.text}>[ ]</Text>}

      <AppButton title="add elem" onPress={() => dispatch(addELem(1))} />
      <AppButton title="remove elem" onPress={() => dispatch(removeElem(1))} />
      <AppButton title="Empty All items" onPress={() => dispatch(emptyArr())} />
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
