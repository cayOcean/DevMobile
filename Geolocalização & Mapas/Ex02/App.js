import React from "react";
import { View, StatusBar } from "react-native";
import MapView from "react-native-maps"; // Corrigido o erro de digitação 'reacti-native-maps'
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

export default () => { 
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.mapView}
        showsUserLocation={true}
        followsUserLocation={true}
      />
    </View>
  );
};
