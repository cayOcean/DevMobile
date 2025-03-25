// Box.js
import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles"; // Importa os estilos definidos em styles.js

// Componente Box que recebe children como prop
export default function Box({ children }) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}