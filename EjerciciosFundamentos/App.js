import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

const name="Olvin";
  const edad=18;
  const productos=[{ id: 1, nombre: "Laptop" },
                  { id: 2, nombre: "Mouse" },
                  { id: 3, nombre: "Teclado" }]



  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
         Como estas {name}
         </Text>

       <Text style={styles.texto}>
        {edad>=18 ? "Mayor de edad" : "Menor de edad"}
      </Text>

       {productos.map((producto) =>(
      <Text style={styles.texto}>
        {productos.name}
      </Text>
       ))};

      <StatusBar style="auto" />
    </View>
       );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d86a6ad0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize:20,
    color:'white',
    margin:10,
  },
});
