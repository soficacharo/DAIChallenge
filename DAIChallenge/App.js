import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { React, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Card from "./Card";
import { Input } from 'react-native-elements'


export default function App() {

  const [text, onChangeText] = useState('')
  const mainInput = useRef()
  
  /*const getPlatos = async () => {
    try{
      const resp = await fetch
      (`${'https://api.spoonacular.com/food/products/search?query=yogurt&apiKey='}${'e7b8481d81cc4dfbb047e0955e432611'}`);
      const data = await resp.json();
      
      return data.products;
    }catch(err){
      console.log(err);
    }
    }

    const [platos, setPlatos] = useState([]);

    const traerPlatos = async () => {
      try{
        const data = await getPlatos();
        console.log(data);
        setPlatos(data);
      }catch(err){
        console.log(err)
      }
        };

      useEffect(() => {
        traerPlatos();
        console.log(platos);
      }, []);*/
      
      const [platos, setPlatos] = useState([]);
           useEffect(() => {
        axios
        // API MARTU: b05a5e76291b48ba9ba54648b74e9fd5
        //API SOFI : e7b8481d81cc4dfbb047e0955e432611
        .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b05a5e76291b48ba9ba54648b74e9fd5`)
        .then((res) => {
          setPlatos(res.data.results)})
          .catch((error) => {
            console.log(error)
          });
      }, []);


  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}>Spoonacular!</Text>
      <Input
        id='busqueda'
          onChangeText={onChangeText}
          value={text}
          placeholder="Buscar receta"
          ref={mainInput}
          style={styles.mainInput}
      />
      <View style={styles.posicionCentrado} >

      <Pressable style={styles.pressable} /* onPress */>
        <Text>Buscar</Text>
      </Pressable>
    </View>
    {platos && 
    platos.map((plato) => (<div>
       <Card imagen={plato.image} titulo={plato.title}/></div>))}
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
  pressable:{
    borderRadius: 20,
    backgroundColor: '#fcfcfc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '3rem',
    minWidth: '10rem',
    text: 'ffffff',
    color: '#ffffff',
    padding: 10,
    margin: '1rem',
  borderRadius: "50px",
  shadowColor: '#000000',
  shadowRadius: 17,
  },
  mainInput: {
    backgroundColor: '#e3e3e3de',
    borderRadius: 5,
    marginLeft: '3rem',
    marginRight: '3rem',
  },
  titulo: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1.5rem',
    marginTop: '3rem',
    marginBottom: '2rem',
    fontWeight: '700',
    fontSize: 35,
  },
});
