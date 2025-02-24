import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// Componente principal do aplicativo
const App = () => {
  // Estado para armazenar o nome digitado pelo usuário
  const [nome, setNome] = useState('');

  // Estado para armazenar a mensagem de saudação ou erro
  const [mensagem, setMensagem] = useState('');

  // Função chamada ao pressionar o botão "Enviar"
  const lidarComClique = () => {
    // Verifica se o usuário digitou um nome
    if (nome) {
      setMensagem(`Olá, ${nome}!`); // Exibe uma saudação personalizada
    } else {
      setMensagem('Por favor, digite seu nome.'); // Mensagem de erro caso o campo esteja vazio
    }
  };

  // Estrutura do layout do aplicativo
  return (
    <View style={styles.container}>
      {/* Exibe uma imagem no topo */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
        style={styles.logo}
      />

      {/* Título do aplicativo */}
      <Text style={styles.titulo}>Exemplo Interativo</Text>

      {/* Campo de entrada de texto para o usuário digitar seu nome */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome} // Atualiza o estado conforme o usuário digita
        value={nome} // Define o valor do campo como o estado "nome"
      />

      {/* Botão que chama a função lidarComClique ao ser pressionado */}
      <Button title="Enviar" onPress={lidarComClique} />

      {/* Botão adicional com estilização personalizada */}
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Clique Aqui</Text>
      </TouchableOpacity>

      {/* Exibe a mensagem de saudação ou erro abaixo do botão */}
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
};

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível na tela
    justifyContent: 'center', // Centraliza os elementos verticalmente
    alignItems: 'center', // Centraliza os elementos horizontalmente
    padding: 20, // Adiciona espaçamento interno
  },
  logo: {
    width: 150, // Define a largura da imagem
    height: 150, // Define a altura da imagem
    marginBottom: 20, // Adiciona espaçamento abaixo da imagem
  },
  titulo: {
    fontSize: 24, // Define o tamanho do texto
    fontWeight: 'bold', // Deixa o texto em negrito
    marginBottom: 20, // Adiciona espaçamento abaixo do título
  },
  input: {
    width: '100%', // Ocupa toda a largura disponível
    height: 40, // Define a altura do campo de entrada
    borderWidth: 1, // Adiciona uma borda ao redor do campo
    borderColor: '#ccc', // Define a cor da borda
    borderRadius: 5, // Arredonda os cantos do campo
    paddingHorizontal: 10, // Adiciona espaçamento interno lateral
    marginBottom: 20, // Adiciona espaçamento abaixo do campo de entrada
  },
  botao: {
    backgroundColor: 'blue', // Define a cor de fundo do botão
    padding: 10, // Adiciona espaçamento interno
    borderRadius: 5, // Arredonda os cantos do botão
    marginTop: 20, // Adiciona espaçamento acima do botão
  },
  textoBotao: {
    color: 'white', // Define a cor do texto do botão
    fontWeight: 'bold', // Deixa o texto em negrito
  },
  mensagem: {
    marginTop: 20, // Adiciona espaçamento acima da mensagem
    fontSize: 16, // Define o tamanho do texto
  },
});

export default App; // Exporta o componente principal para ser usado no aplicativo
