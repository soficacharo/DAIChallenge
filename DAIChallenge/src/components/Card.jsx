import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';


const Card = () => {
  return (<div style={styles.card}>
    <Image source={Imagen} style={styles.img}/>
    <Text style={styles.text}>{Texto}</Text>
    </div>);
};

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'darkgreen',
    borderRadius: '10%',
    flexDirection:'column',
    width: '70%'
  },
  img:{
    width:'100%',
    height:'70%',
    paddingBottom:'5rem',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0%',
    borderBottomRightRadius: '0%'
  },
  text:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '100%',
    display: 'revert',
    color: '#FFFFFF'
  }

})

export default Card;