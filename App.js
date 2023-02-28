import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet} from "react-native";
import { A } from "@expo/html-elements";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Página Home" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Página details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * <div style="flex:1; background-color: #FFF; align-items: center; justify-content:center">
 *  <p>Opne Up...</p>
 * </div>
 * não existe " - " no js, é tudo junto e letra maiuscula
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
