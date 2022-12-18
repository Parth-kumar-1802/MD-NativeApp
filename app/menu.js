import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, TouchableNativeFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import client from '../sanity';

import ContactCard from './components/contactCard';

function Menu({navigation}) {
    const [impContacts, setImpContacts] = useState([]);

    useEffect(()=>{
        const query = `*[_type == "contacts"]{...}`
        client.fetch(query).then(data =>{
            setImpContacts(data);
        })
    }, []);
    console.log(impContacts);

    //console.log(useDimensions());
    //console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation();

    const placementor = "https://placementor-iit-dhanbad.onrender.com/";
    const twitter = "https://twitter-mukul202.vercel.app/";
    const youtube = "https://www.youtube.com/@MailerDaemonIITISMDhanbad";
    const md = "https://mailer-daemon.vercel.app/";
    var currentLink = youtube;
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={{width:'100%', height:'93%'}}>
        {impContacts?.map(contact => {
            return(
            <ContactCard
                key={contact._id}
                id={contact._id}
                imgUrl={
                    contact.image
                }
                name={contact.name}
                position={contact.position}
                mail={contact.mail}
                number={contact.number}
            />)
        })}
      </SafeAreaView>
      <SafeAreaView style={styles.navig}>
        <TouchableNativeFeedback onPress={() => {
          //console.log("country roads");
          navigation.navigate('Home');
        }}>
          <Text>ISM</Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          //console.log("Placements");
          navigation.navigate('Placementor');
        }}>
          <Text>Placementor</Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          //console.log("socials media addict");
          navigation.navigate('Ismgram');
        }}>
          <Text>ISMGram</Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          //console.log("DSW ka number");
          navigation.navigate('Menu');
        }}>
          <Text>Others</Text>
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

export default Menu;