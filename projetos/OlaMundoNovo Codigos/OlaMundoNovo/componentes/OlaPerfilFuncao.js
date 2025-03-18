import React from 'react';
import { Text, View } from 'react-native';

export default function OlaPerfilFuncao({ nome, endereco, telefone }) {
  return (
    <View>
      <Text>🔹 Componente Funcional</Text>
      <Text>Nome: {nome}</Text>
      <Text>Endereço: {endereco}</Text>
      <Text>Telefone: {telefone}</Text>
    </View>
  );
}
