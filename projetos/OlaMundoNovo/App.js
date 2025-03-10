import React from 'react';
import { View } from 'react-native';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';

export default function App() {
  return (
    <View>
      <OlaPerfilFuncao
        nome="Cayque Lima"
        endereco="Rua dos mlk zica, 1914"
        telefone="4002-8922"
      />
      <OlaPerfilClasse
        nome="Raphael Veiga"
        endereco="Av. Palestra Italia"
        telefone="(27) 20212711"
      />
    </View>
  );
}
