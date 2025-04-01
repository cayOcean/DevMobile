import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Settings from "./components/Details";

// Cria um Stack Navigator usando createNativeStackNavigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer é necessário para envolver o navegador.
    <NavigationContainer>
      <Stack.Navigator>
        {/* Define a tela Home e associa o componente Home */}
        <Stack.Screen name="Home" component={Home} />

        {/* Define a tela Settings e associa o componente Settings */}
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
