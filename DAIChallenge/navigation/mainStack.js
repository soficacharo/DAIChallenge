import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                        <Stack.Screen
                            name='Login'
                            component={Login}
                        />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack