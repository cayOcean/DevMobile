import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

export default function StockScreen() {
  const [stock, setStock] = useState([
    { id: '1', name: 'Parafuso', quantity: 100, code: 'P001' },
    { id: '2', name: 'Porca', quantity: 150, code: 'P002' },
  ]);

  const [newItem, setNewItem] = useState('');
  const [newQuantity, setNewQuantity] = useState('');

  const navigation = useNavigation();

  const handleAddItem = () => {
    if (!newItem || !newQuantity) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const newStockItem = {
      id: String(stock.length + 1),
      name: newItem,
      quantity: parseInt(newQuantity),
      code: `P00${stock.length + 1}`,
    };

    setStock([...stock, newStockItem]);
    setNewItem('');
    setNewQuantity('');
  };

  const handleEditItem = (item, index) => {
    navigation.navigate('EditStock', {
      item,
      updateStock: (updatedItem) => {
        const updatedStock = [...stock];
        updatedStock[index] = updatedItem;
        setStock(updatedStock);
      },
    });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name} (Cód: {item.code})</Text>
      <Text style={styles.itemQuantity}>Qtd: {item.quantity}</Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => handleEditItem(item, index)}
      >
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque de Peças</Text>

      <FlatList
        data={stock}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      <Text style={styles.subtitle}>Adicionar nova peça:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da peça"
        value={newItem}
        onChangeText={setNewItem}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={newQuantity}
        onChangeText={setNewQuantity}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddItem}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
