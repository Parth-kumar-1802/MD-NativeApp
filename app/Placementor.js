import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

function Placementor({ navigation}) {
  console.log(useDimensions());
  console.log(useDeviceOrientation());
  const {landscape} = useDeviceOrientation();

  const placementor = "https://placementor-iit-dhanbad.onrender.com/";
  const twitter = "https://twitter-mukul202.vercel.app/";
  const youtube = "https://www.youtube.com/@MailerDaemonIITISMDhanbad";
  const md = "https://mailer-daemon.vercel.app/";
  var currentLink = placementor;
  return (
    <SafeAreaView style={styles.container}>
                <SafeAreaView style={{width:'100%', height:'93%'}}>
          <WebView
            source={{uri : currentLink}}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.navig}>
        <TouchableNativeFeedback onPress={() => {
          //console.log("country roads");
          navigation.navigate('Home');
        }}>
          <View style={{alignItems: 'center'}}>
          <Icon name="home"
          size={25}
          color="#000" />
          <Text>ISM</Text></View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          //console.log("Placements");
          navigation.navigate('Placementor');
        }}>
          <View style={{alignItems: 'center'}}>
          <Icon name="bar-chart"
          size={25}
          color="#000" />
          <Text>Placementor</Text></View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          //console.log("socials media addict");
          navigation.navigate('Ismgram');
        }}>
          <View style={{alignItems: 'center'}}>
          <Icon name="users"
          size={25}
          color="#000" />
          <Text>ISMgram</Text></View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          //console.log("DSW ka number");
          navigation.navigate('Menu');
        }}>
          <View style={{alignItems: 'center'}}>
          <Icon name="plus"
          size={25}
          color="#000" />
          <Text>Others</Text></View>
        </TouchableNativeFeedback>
      </SafeAreaView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? /*StatusBar.currentHeight*/ 35 : 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navig: {
    width: '100%',
    height:'7%',
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent:"space-evenly",
    alignItems:"center",
  }
});

export default Placementor;