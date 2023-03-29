import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from "./screens/HomeScreen"
import EnterDataDetails from "./screens/EnterDataDetails"
import ViewData from "./screens/ViewData"
import EnterDataMeds from "./screens/EnterDataMeds"
import FlashScreen from './screens/Flashscreen'
import Register from './screens/Register';
import SignIn from './screens/SignIn';

export default class App extends React.Component {
  render() {
    return (
      <View style = {{flex: 1, backgroundColor: "white"}}>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
    FlashScreen: FlashScreen,
    Register: Register,
    SignIn: SignIn,
    HomeScreen: HomeScreen,
    EnterDataDetails: EnterDataDetails,
    EnterDataMeds: EnterDataMeds,
    ViewData: ViewData
});

const AppContainer = createAppContainer(AppNavigator);
