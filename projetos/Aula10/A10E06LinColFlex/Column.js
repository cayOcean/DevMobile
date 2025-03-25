import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles"; // Importa os estilos definidos em styles.js

export default function Column({ children }) {
  return <View style={styles.col}>{children}</View>;
}   

Column.PropTypes = { 
    children: PropTypes.node.isRequired,
}