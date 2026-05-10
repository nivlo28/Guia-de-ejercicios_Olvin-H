import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {

const name="Olvin";
  const [edad,setEdad]=useState("");
  const [producto, setProducto] = useState("");
  const [productos, setProductos] = useState([]);


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
         Como estas {name}
         </Text>

         <TextInput
         style={styles.input}
         placeholder="Ingrese su edad"
         keyboardType="numeric"
         value={edad}
         onChangeText={setEdad}
         />

       <Text style={styles.texto}>{
      edad=== "" ? "Ingrese una edad": Number(edad) >=18 ? "Mayor de edad": "Menor de edad"}
      </Text>

        <TextInput
        style={styles.input}
        placeholder="Ingrese un producto"
        value={producto}
        onChangeText={setProducto}
      />

      {/* BOTON */}
      <Button
        title="Agregar producto"
        onPress={() => {
          setProductos([...productos, producto]);
          setProducto("");
        }}
      />

      <Text style={styles.subtitulo}>
        Lista de productos
      </Text>

       {productos.map((item, index) => (
        <Text key={index} style={styles.producto}>
          • {item}
        </Text>
      ))}

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

  producto: {
    fontSize:18,
    color: 'white',
    marigin:4,
  },

  input: {
    backgroundColor: 'white',
    width:200,
    padding:10,
    borderRadius:8,
    margin:10,
    textAlign:'center',
  },
 
   titulo: {
    fontSize: 28,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },

  subtitulo: {
    fontSize: 22,
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },

});
