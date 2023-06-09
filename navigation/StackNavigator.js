import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
const Stack = createStackNavigator();
import FlashScreen from "../screens/Flashscreen"
import Loading from "../screens/Loading"
import SignIn from '../screens/SignIn';
import Register from '../screens/Register';
import ViewData from "../screens/ViewData"

export default class StackNavigator extends React.Component{
    render(){
        return(
            <Stack.Navigator
            initialRouteName="ViewData"
            screenOptions={{
            headerStyle: {
            backgroundColor:'#000F1A' ,
            shadowOpacity: 0,
            elevation: 0,
            height:70,
             },
            headerTintColor: 'white',
            }}
            >
            <Stack.Screen
            name = "Loading"
            component = {Loading}
            options = {{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen
            name = "FlashScreen"
            component = {FlashScreen}
            options = {{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen
            name = "Register"
            component = {Register}
            options = {{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen
            name = "SignIn"
            component = {SignIn}
            options = {{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen
            name = "ViewData"
            component = {ViewData}
            options = {{headerShown: false}}
            >
            </Stack.Screen>
            </Stack.Navigator>

        )
    }
}