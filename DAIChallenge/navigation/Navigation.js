import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../utils/AuthContext';
import Home from '../screens/Home';
import Loguearse from '../screens/Login';

const Stack = createStackNavigator();

const Navigation = () => {
    const { user } = useAuth();
    console.log('user', user);

    return (

        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="Home" component={Home} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={Loguearse} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;