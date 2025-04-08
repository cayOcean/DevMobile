import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, Alert
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      Alert.alert('Login bem-sucedido', 'Você está logado!');
      navigation.navigate('Stock');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
    }
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#EDE6DA',
      justifyContent: 'center',
      padding: 20,
    }}>
      <View style={{ marginBottom: 40, alignItems: 'center' }}>
        <Text style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: '#1a237e',
        }}>
          Login
        </Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <View style={{ marginBottom: 15 }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#cfd8dc',
              borderRadius: 8,
              padding: 12,
              fontSize: 16,
              backgroundColor: '#ffffff',
              color: '#37474f',
            }}
            placeholder="Nome de usuário"
            placeholderTextColor="#90a4ae"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#cfd8dc',
              borderRadius: 8,
              padding: 12,
              fontSize: 16,
              backgroundColor: '#ffffff',
              color: '#37474f',
            }}
            placeholder="Senha"
            placeholderTextColor="#90a4ae"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#1a237e',
            paddingVertical: 14,
            borderRadius: 8,
            marginBottom: 10,
          }}
          onPress={handleLogin}
        >
          <Text style={{
            color: '#ffffff',
            fontSize: 16,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
          <Text style={{
            color: '#1a237e',
            textAlign: 'center',
            textDecorationLine: 'underline',
            fontSize: 14,
          }}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
