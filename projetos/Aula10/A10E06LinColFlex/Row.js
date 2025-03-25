import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles"; // Importa os estilos definidos em styles.js

export default function Row({children}) {
    return <View style={styles.row}>{children}</View>;
}

Row.PropTypes = {
    children: PropTypes.node.isRequired,
};