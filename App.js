import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image } from "react-native";
import { A } from "@expo/html-elements";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Sou a página Home Magnificai" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Sou a página feliz" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Vai pra Detalhes"
        onPress={() => navigation.navigate("Details")}
      ></Button>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
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
