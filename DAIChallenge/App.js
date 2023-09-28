import { StyleSheet, Text, View } from 'react-native';
import { React, useState, useEffect } from 'react';


export default function App() {
  const getPlatos = async () => {
    const resp = await fetch(`${'https://api.spoonacular.com/food/products/search?query=yogurt&apiKey='}${'e7b8481d81cc4dfbb047e0955e432611'}`);
    const data = await resp.json();
    return data;
    }

    const [platos, setPlatos] = useState();

    const traerPlatos = async () => {
        const data = await getPlatos();
        console.log(data);
        setPlatos([data]);
        };

      useEffect(() => {
        traerPlatos();
        console.log(platos);
      }, []);

  return (
    <View style={styles.container}>
    {platos && 
    platos.map((plato) => (<div><p>{plato.title}</p></div>))}
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
