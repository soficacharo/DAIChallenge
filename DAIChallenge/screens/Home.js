import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { React, useState, useEffect, useRef } from 'react';
import Card from "../components/Card";
import { Input } from 'react-native-elements'

export default function Home() {
    const [text, onChangeText] = useState('')
    const mainInput = useRef()

    

    return (<View style={styles.container}>
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
  </View>);
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
    },})