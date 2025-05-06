// Importa React e os hooks useState e useEffect para manipulação de estado e efeitos colaterais.
import React, { useState, useEffect } from "react";

// Importa os componentes Text e View da biblioteca React Native, usados para renderizar texto e layouts.
import { Text, View } from "react-native";

// Importa o módulo de localização do Expo para acessar a localização do dispositivo.
import * as Location from "expo-location";

// Importa o arquivo de estilos personalizados para o componente.
import styles from "./Styles";

// Define a chave da API do Google Maps. Está vazia no momento, precisa ser preenchida para funcionar.
const API_KEY = "";

// Define a URL base para a requisição de geocodificação reversa, que converte latitude e longitude em um endereço.
const URL = `https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;

// Componente principal que será exportado.
export default function WhereAnI() {
  // Estado para armazenar o endereço obtido via geolocalização.
  const [address, setAddress] = useState("loading...");
  
  // Estado para armazenar a longitude.
  const [longitude, setLongitude] = useState();

  // Estado para armazenar a latitude.
  const [latitude, setLatitude] = useState();

  // Hook useEffect executado quando o componente é montado.
  useEffect(() => {
    // Função que define os valores de latitude e longitude a partir de um objeto de localização.
    function setPosition({
      coords: { latitude, longitude }, // Corrigido "cords" para "coords"
    }) {
      setLatitude(latitude);           // Define corretamente o valor da latitude
      setLongitude(longitude);         // Define corretamente o valor da longitude
    }

    // Faz a requisição para a API do Google para obter o endereço a partir da latitude e longitude.
    fetch(`${URL}${latitude},${longitude}`)
      .then((resp) => resp.json())     // Converte a resposta em JSON
      .then(({ results }) => {
        if (results.length > 0) {      // Corrigido "lenght" para "length"
          setAddress(results[0].formatted_address); // Corrigido "formatted_addresss" para "formatted_address"
        }
      })
      .catch((error) => {
        console.log(error.message);    // Mostra o erro no console se ocorrer
      });

    let watcher; // Declara uma variável para o watcher de localização (ainda não utilizada no trecho)

    // Início de uma função assíncrona IIFE (Immediately Invoked Function Expression)
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      // Aqui ainda faltaria completar o restante da lógica do watcher, se for necessário
    })();
  }, []); // Fim do useEffect - executa apenas uma vez ao montar o componente

  // Renderiza o componente na tela com a informação de localização.
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Latitude:{latitude}</Text>
      <Text style={styles.lalbel}> Longitude: {longitude}</Text>

    </View>
  );
}
