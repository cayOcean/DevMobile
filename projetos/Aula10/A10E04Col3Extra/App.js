// App.js
import React from "react";
import { View } from "react-native";
import styles from "./styles"; // Importa os estilos definidos em styles.js
import Box from "./Box"; // Importa a componente Box

// Componente principal App
export default function App() {
  return (
    <View style={styles.container}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </View>
  );
}