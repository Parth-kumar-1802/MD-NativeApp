import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Home from './app/screens/Home';
import Placementor from './app/screens/Placementor';
import Ismgram from './app/screens/ISMGram';
import Menu from './app/screens/menu'
import Contacts from './app/screens/contacts';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App(props) {
  //console.log(useDimensions());
  //console.log(useDeviceOrientation());
  const {landscape} = useDeviceOrientation();

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false, animation: "slide_from_bottom"}} />
        <Stack.Screen name="Placementor" component={Placementor} options={{headerShown: false, animation: "slide_from_bottom"}} />
        <Stack.Screen name="Ismgram" component={Ismgram} options={{headerShown: false, animation: "slide_from_bottom"}} />
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false, animation: "slide_from_bottom"}} />
        <Stack.Screen name="Contacts" component={Contacts} options={{headerShown: false, animation: "slide_from_right"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   //marginTop: Platform.OS === "android" ? /*StatusBar.currentHeight*/ 35 : 0,
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // navig: {
  //   width: '100%',
  //   height:'7%',
  //   backgroundColor: '#fff',
  //   flexDirection: "row",
  //   justifyContent:"space-evenly",
  //   alignItems:"center",
  //}
});


