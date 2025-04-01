import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigation } from "@react-navigation/native-stack";
import Home from "./componentes/Home";
import Settings from "./componentes/Settings";

//Cria um Stack Navigation usando createNativeStackNavigator.
const Stack = createNativeStackNavigation();

export default function App(){
  return (
    //NavigationContainer é necessário para envolver o navegador.
    <NavigationContainer>
      <Stack.Navigator>
        {/*Define a tela Home e associa o componente Home*/}
        <Stack.Screen name="Home" component={Home} />

        {/*Define a tela settings e associa o componente settings*/}
        <Stack.Screen name="Settings" componente={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}