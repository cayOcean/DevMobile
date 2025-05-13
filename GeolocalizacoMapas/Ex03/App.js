import React from "react";
import { View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./Styles";

StatusBar.setBarStyle("dark-content");

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsPointsOfInterest={false}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        <Marker
          title="Duff Brewery"
          description="Uma grande cervejaria artesanal!"
          coordinate={{
            latitude: 43.8418728,
            longitude: -79.086082,
          }}
        />
        <Marker
          title="Pawtucket Brewery"
          description="A Cervejaria Histórica!"
          coordinate={{
            latitude: 43.843,
            longitude: -79.088,
          }}
        />
      </MapView>
    </View>
  );
}
