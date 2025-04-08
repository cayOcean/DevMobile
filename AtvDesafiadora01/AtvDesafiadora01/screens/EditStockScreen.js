import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles'; // Certifique-se de que o caminho está correto

export default function EditStockScreen({ route, navigation }) {
  const { item, updateStock } = route.params;
  const [quantity, setQuantity] = useState(item.quantity.toString());

  const handleSave = () => {
    const newQty = parseInt(quantity);
    if (isNaN(newQty) || newQty < 0) {
      Alert.alert('Erro', 'Quantidade inválida.');
      return;
    }

    const updatedItem = { ...item, quantity: newQty };
    updateStock(updatedItem);
    navigation.goBack();
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#EDE6DA', // cor de fundo alterada aqui
      padding: 20,
      justifyContent: 'flex-start',
    }}>
      <Text style={{
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
        color: '#2c3e50',
      }}>
        Editar Peça
      </Text>

      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontSize: 15, color: '#34495e', marginBottom: 4 }}>Nome:</Text>
        <Text style={{ fontSize: 17, color: '#2c3e50' }}>{item.name}</Text>
      </View>

      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontSize: 15, color: '#34495e', marginBottom: 4 }}>Código:</Text>
        <Text style={{ fontSize: 17, color: '#2c3e50' }}>{item.code}</Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 15, color: '#34495e', marginBottom: 4 }}>Quantidade:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#bdc3c7',
            borderRadius: 6,
            padding: 10,
            backgroundColor: '#ffffff',
            color: '#2c3e50',
            fontSize: 16,
          }}
          value={quantity}
          keyboardType="numeric"
          onChangeText={setQuantity}
        />
      </View>

      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#2980b9',
            paddingVertical: 14,
            borderRadius: 6,
            alignItems: 'center',
          }}
          onPress={handleSave}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
