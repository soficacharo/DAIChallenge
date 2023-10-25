import { StyleSheet, View, Pressable, Text } from 'react-native';
import { React, useState, useRef } from 'react';
import { Input } from 'react-native-elements';
import { useAuth } from '../utils/AuthContext';

export default function Login() {
  const [validated, setValidated] = useState(false);
  const { login, loading } = useAuth();
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
          value={text}
          placeholder="Ingrese su email"
          ref={mainInput}
          onChangeText={(text) => setEmail(text)}
          style={styles.mainInput}
      />
      <Input
        id='contraseña'
          value={text}
          placeholder="Ingrese su contraseña"
          ref={mainInput}
          style={styles.mainInput}
      /><TouchableOpacity onPress={Logearse}>
      <Button
          title="Iniciar Sesión"
          disabled={loading}
      />
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