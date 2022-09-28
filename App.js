import * as React from "react";
import { Button, View, Text, StyleSheet, ScrollView } from "react-native";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Counter from "./features/counter/Counter";
import Number from "./features/numbers/Number";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              margin: 0,
              color: "black",
              fontWeight: "bold",
            },
          }}
        >
          <Tab.Screen name="Counter example -- redux use" component={Counter} />
          <Tab.Screen name="Arr example -- redux use" component={Number} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
