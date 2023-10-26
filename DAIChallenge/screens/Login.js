import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { React, useState, useRef } from 'react';
import { Input } from 'react-native-elements';
import { useAuth } from '../utils/AuthContext';

export default function Login() {
  const [validated, setValidated] = useState(false);
  const { login, loading } = useAuth('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const Logearse = async () => {
      if(email != '' && password != ''){
          try {
              await login(email, password)
              navigation.navigate('Home')
          } catch (error) {
              console.error('Error al iniciar sesión:', error);
          }
      }
      else{
          alert("Porfavor complete los campos")
      }
  }
 
    return (<View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido a Spoonacular!</Text>
      <Input
        id='email'
          value={email}
          placeholder="Ingrese su email"
          
          onChangeText={(email) => setEmail(email)}
          style={styles.mainInput}
      />
      <Input
        id='contraseña'
          value={password}
          placeholder="Ingrese su contraseña"
          
          style={styles.mainInput}
          onChangeText={(password) => setPassword(password)}
      /><TouchableOpacity onPress={Logearse}>
        <Text>Iniciar Sesión</Text>
      </TouchableOpacity>
  </View>
)
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
      marginLeft: '25rem',
    borderRadius: "50px",
    shadowColor: '#808080',
    shadowRadius: 8,
    },
    mainInput: {
      backgroundColor: '#e3e3e3de',
      borderRadius: 5,
      marginLeft: '6rem',
      marginRight: '3rem',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    titulo: {
      display: 'flex',
      marginLeft: '25rem',
      justifyContent: 'center',
      fontSize: '1.5rem',
      marginBottom: '2rem',
      fontWeight: '700',
      fontSize: 35,
    },})