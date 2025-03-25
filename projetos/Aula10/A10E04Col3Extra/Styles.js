import { Platform, StyleSheet, StatusBar } from "react-native";

// Cria um objeto StyleSheet para definir os estilos
export default StyleSheet.create({
  // Estilos para o container principal
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightgray", // Cor de fundo
    alignItems: "center", // Centraliza os elementos horizontalmente
    justifyContent: "space-around", // Distribui o espaço igualmente
    paddingTop: Platform.select({
      ios: 20,
      android: StatusBar.currentHeight,
    }),
  },
  // Estilos para as caixas
  box: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
  // Estilos para o texto dentro das caixas
  boxText: {
    color: "black",
    fontWeight: "bold",
  },
});
