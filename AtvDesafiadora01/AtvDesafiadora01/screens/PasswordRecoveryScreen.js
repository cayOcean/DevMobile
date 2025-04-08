import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';

export default function PasswordRecoveryScreen() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const generateRandomPassword = (length = 10) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  };

  const handleRecoverPassword = () => {
    const simulatedPassword = generateRandomPassword();
    setNewPassword(simulatedPassword);
    setShowPassword(true);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#f0f4f8',
      justifyContent: 'center',
      paddingHorizontal: 24,
    }}>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2e86de',
        textAlign: 'center',
        marginBottom: 30,
      }}>
        Recuperar Senha
      </Text>

      <Text style={{
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
      }}>
        Digite seu e-mail:
      </Text>

      <TextInput
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 12,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: '#ccc',
          marginBottom: 20,
          fontSize: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
        }}
        placeholder="exemplo@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#2e86de',
          paddingVertical: 14,
          borderRadius: 12,
          alignItems: 'center',
          marginBottom: 20,
          shadowColor: '#2e86de',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={handleRecoverPassword}
      >
        <Text style={{
          color: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
          Recuperar Senha
        </Text>
      </TouchableOpacity>

      {showPassword && (
        <Animated.View style={{
          opacity: fadeAnim,
          backgroundColor: '#d1ecf1',
          padding: 16,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#bee5eb',
        }}>
          <Text style={{
            color: '#0c5460',
            fontSize: 16,
            textAlign: 'center',
          }}>
            Sua nova senha é:{"\n"}
            <Text style={{ fontWeight: 'bold' }}>{newPassword}</Text>
          </Text>
        </Animated.View>
      )}
    </View>
  );
}
