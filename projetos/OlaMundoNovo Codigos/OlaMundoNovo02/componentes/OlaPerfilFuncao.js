import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function OlaPerfilFuncao({ nome, endereco, telefone }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔹 Componente Funcional</Text>
      <Text>Nome: {nome}</Text>
      <Text>Endereço: {endereco}</Text>
      <Text>Telefone: {telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9f9b1',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
