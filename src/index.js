import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "./screens/AboutScreen";
import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import StarScreen from "./screens/StarScreen";
import LoginScreen from "./screens/LoginScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <tabs.Navigator>
      <tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <tabs.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          tabBarLabel: "Tela de Sobre",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note" color={color} size={26} />
          ),
        }}
      />
      <tabs.Screen
        name="StarScreen"
        component={StarScreen}
        options={{
          tabBarLabel: "Tela Star",
        }}
      />
      <tabs.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          tabBarLabel: "Tela Details",
        }}
      />
    </tabs.Navigator>
  );
}
