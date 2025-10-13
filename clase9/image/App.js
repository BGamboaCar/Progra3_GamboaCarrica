import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Probando imagenes</Text>
      <Image source={require("./assets/zonaMedia.jpeg")} resizeMode="contain" />
      <Image source={{uri:"https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85"}} 
      resizeMode="contain" style={styles.foto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto:{
    width: 700,
    height: 500
  }
});
