import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class OlaPerfilClasse extends Component {
  render() {
    const { nome, endereco, telefone } = this.props;

    return (
      <View>
        <Text>🔹 Componente de Classe</Text>
        <Text>Nome: {nome}</Text>
        <Text>Endereço: {endereco}</Text>
        <Text>Telefone: {telefone}</Text>
      </View>
    );
  }
}
