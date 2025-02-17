// importa a imagem do diretório de assets
import logox from './assets/NativeLogo.png';
// importa o react e o hook useState para gerenciar o estado
import React, { useState } from 'react';
// importa os componentes do react native para construção da interface
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

// define o componente principal do aplicativo
const App = () => {
  // cria um estado para armazenar o nome digitado pelo usuário
  const [nome, setNome] = useState('');
  // cria um estado para armazenar a mensagem a ser exibida
  const [mensagem, setMensagem] = useState('');

  // função que define a mensagem ao clicar no botão
  const lidarComClique = () => {
    // verifica se o nome foi digitado antes de definir a mensagem
    if (nome) {
      setMensagem(`olá, ${nome}!`);
    }
  };

  return (
    // usa scrollview para permitir rolagem na tela
    <ScrollView style={styles.container}>
      {/* exibe a imagem e um texto informativo */}
      <View style={styles.view}>
        <Image source={logox} style={styles.image} />
        <Text style={styles.text}>
          exemplo de elementos gráficos interativos em react native
        </Text>
      </View>

      {/* campo de entrada de texto e botão de envio */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="digite seu nome"
          onChangeText={setNome}
          value={nome}
        />
        <Button title="enviar" onPress={lidarComClique} />
      </View>

      {/* exibe a mensagem apenas se houver conteúdo */}
      {mensagem ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{mensagem}</Text>
        </View>
      ) : null}

      {/* botão adicional com o texto da mensagem ou um texto padrão */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>{mensagem || 'clique aqui'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageContainer: {
    marginTop: 10,
  },
  message: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// exporta o componente para ser utilizado no aplicativo
export default App;
