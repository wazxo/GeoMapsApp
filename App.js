//Johelin Pascual Perez Valdez (2022-1131)
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import { API_KEY } from "./config";
import { useState } from "react";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [latitude, setLatitud] = useState("");
  const [longitude, setLongitud] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState({
    latitude: 25.03428,
    longitude: -77.39628,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [modalVisible, setModalVisible] = useState(false);

  const geocodeLatLng = async () => {
    if (!latitude || !longitude) {
      Alert.alert("Error", "Por favor, ingrese latitud y longitud validas.");
      return;
    }

    const latlng = `${latitude}, ${longitude}`;
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=${API_KEY}`
      );
      if (response.data.status === "OK") {
        const formattedAddress = response.data.results[0].formatted_address;
        setAddress(formattedAddress);

        setRegion({
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });

        setModalVisible(true);
      } else {
        Alert.alert("Error", "No se pudo encontarrt la direccion.");
      }
    } catch (error) {
      Alert.alert("Error", `Fallo la geocodificacion: ${error.message}`);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <MapView style={styles.map} region={region}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
      </MapView>
      <View style={styles.controls}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={(text) => setApellido(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Latitud"
          value={latitude}
          onChangeText={(text) => setLatitud(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Longitud"
          value={longitude}
          onChangeText={(text) => setLongitud(text)}
          keyboardType="numeric"
        />
        <Button title="Obtener Direccion" onPress={geocodeLatLng} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.ModalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalles</Text>
            <Text style={styles.modalText}>Direccion: {address} </Text>
            <Text style={styles.modalText}>
              Nombre: {nombre} {apellido}
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 2,
  },

  controls: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  ModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },

  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
