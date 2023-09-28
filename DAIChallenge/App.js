import { StyleSheet, Text, View, Image } from 'react-native';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./Card";


export default function App() {
  
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
});
