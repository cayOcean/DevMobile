import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class OlaPerfilClasse extends Component {
  render() {
    const { nome, endereco, telefone } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>🔹 Componente de Classe</Text>
        <Text>Nome: {nome}</Text>
        <Text>Endereço: {endereco}</Text>
        <Text>Telefone: {telefone}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b1e3f9',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
