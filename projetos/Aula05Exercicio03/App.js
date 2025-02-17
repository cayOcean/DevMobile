// importa o react e o hook usestate para gerenciar o estado
import React, { useState } from 'react';
// importa os componentes do react native para construir a interface
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  StyleSheet,
} from 'react-native';

// define o componente principal do aplicativo
const App = () => {
  // cria um estado para armazenar o texto digitado pelo usuário
  const [text, setText] = useState('');
  // cria um estado para armazenar a lista de itens
  const [items, setItems] = useState([
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
    { id: 4, name: 'item 4' },
  ]);

  // define seções com títulos e dados para a sectionlist
  const sections = [
    {
      title: 'seção 1',
      data: [
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' },
      ],
    },
    {
      title: 'seção 2',
      data: [
        { id: 3, name: 'item 3' },
        { id: 4, name: 'item 4' },
      ],
    },
  ];

  // função para adicionar um novo item à lista
  const handlePress = () => {
    if (text.trim() === '') return; // evita adicionar itens vazios
    setItems([...items, { id: items.length + 1, name: text }]); // adiciona um novo item
    setText(''); // limpa o campo após adicionar
  };

  return (
    // usa scrollview para permitir a rolagem da tela
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        {/* exibe um texto e uma imagem */}
        <Text style={styles.text}>texto de exemplo</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />
        {/* campo de entrada de texto */}
        <TextInput
          style={styles.TextInput}
          placeholder="digite algo"
          onChangeText={setText}
          value={text}
        />
        {/* botão para adicionar item */}
        <Button title="clique aqui" onPress={handlePress} />
      </View>

      {/* exibe a lista de itens usando flatlist */}
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* exibe as seções usando sectionlist */}
      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
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
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

// exporta o componente para ser utilizado no aplicativo
export default App;
