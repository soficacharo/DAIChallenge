import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import Login from '../screens/Login'
import VistaMenu from '../screens/VistaMenu'

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                        <Stack.Screen
                            name='Login'
                            component={Login}
                        />
                        <Stack.Screen
                            name='Home'
                            component={Home}
                        />

                        <Stack.Screen
                        name='VistaMenu'
                        component={VistaMenu}
                        />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack