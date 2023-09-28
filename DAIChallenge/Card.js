
import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';

const Card = (props) => {
  return (<div style={styles.card}>
    <Image source={props.imagen} style={styles.img}/>
    <Text style={styles.text}>{props.titulo}</Text>
    </div>);
};

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#fcfcfc',
    borderRadius: '10%',
    flexDirection:'column',
    width: '16rem',
    marginBottom: '1rem',
    marginTop: '1rem',
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 17,
    borderRadius: "2rem",
    boxShadow: '100%'
  },
  img:{
    width:'16rem',
    height:'15rem',
    paddingBottom:'10rem',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0%',
    borderBottomRightRadius: '0%',
  },
  text:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '100%',
    display: 'revert',
    color: '#4f4f4f',
    paddingBottom: '1rem',
    paddingTop:'1rem'

  }

})

export default Card;