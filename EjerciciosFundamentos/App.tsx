import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

type Producto={
  name:string;
};

export default function App() {

  function greeting(name:string){
    return "Hola"+ name;
  }
  const [nombre, setNombre]=useState<string>("");
  const [edad,setEdad]=useState<string>("");
  const [producto, setProducto] = useState<string>("");
  const [productos, setProductos] = useState<Producto[]>([]);


  return (
    <View style={styles.container}>
    <Text style={styles.title}>
    Bienvenidos a EjercicosFundamentos
    </Text>
    <TextInput
       style={styles.input}
         placeholder="Ingrese su nombre"
         value={nombre}
         onChangeText={setNombre}
         />
         <Text style={styles.texto}>
            {nombre=== "" ? "Ingrese nombre" : greeting( nombre)}      
         </Text>

         <TextInput
         style={styles.input}
         placeholder="Ingrese edad"
         keyboardType="numeric"
         value={edad}
         onChangeText={setEdad}
         />

       <Text style={styles.texto}>{
      edad=== "" ? "Ingrese edad": Number(edad) >=18 ? "Mayor de edad": "Menor de edad"}
      </Text>

        <TextInput
        style={styles.input}
        placeholder="Ingrese un producto"
        value={producto}
        onChangeText={setProducto}
      />

      <Button
        title="Agregar producto"
        onPress={() => {
          setProductos([...productos,{name: producto}]);
          setProducto("");
        }}
      />

      <Text style={styles.segundo}>
        Lista de productos
      </Text>

       {productos.map((item, index) => (
        <Text key={index} style={styles.producto}>
          • {item.name}
        </Text>
      ))}

      <StatusBar style="auto" />
    </View>
       );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000d0',
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
    margin:4,
  },

  input: {
    backgroundColor: 'gray',
    width:200,
    padding:10,
    borderRadius:8,
    margin:10,
    textAlign:'center',
  },
 
   title: {
    textAlign:'center',
    fontSize: 28,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },

  segundo: {
    fontSize: 22,
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },

});
