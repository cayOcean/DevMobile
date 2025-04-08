// Cayque Lima dos Santos

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/LoginScreen';
import StockScreen from './screens/StockScreen';
import EditStockScreen from './screens/EditStockScreen';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Stock"
          component={StockScreen}
          options={{ title: 'Estoque' }}
        />
        <Stack.Screen
          name="EditStock"
          component={EditStockScreen}
          options={{ title: 'Editar Peça' }}
        />
        <Stack.Screen
          name="PasswordRecovery"
          component={PasswordRecoveryScreen}
          options={{ title: 'Recuperar Senha' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
