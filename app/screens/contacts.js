import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, TouchableNativeFeedback, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import client from '../../sanity';
import MapView, {Marker} from 'react-native-maps';

import ContactCard from '../components/contactCard';
//import Map from '../components/map';

function Contacts({navigation}) {
  const [adminContacts, setAdminContacts] = useState([]);

  useEffect(()=>{
    const query = `*[_type == "administration"]{...}`
    client.fetch(query).then(data =>{
        setAdminContacts(data);
    })
  }, []);
  console.log(adminContacts);
  const deans = adminContacts.filter((element)=>{
    return element.category=="deans";
  })
  console.log(deans);
  const assDeans = adminContacts.filter((element)=>{
    return element.category=="assDean";
  })
  console.log(assDeans);
  const hods = adminContacts.filter((element)=>{
    return element.category=="hods";
  })
  console.log(hods);

  //console.log(useDimensions());
  //console.log(useDeviceOrientation());
  const Dimensions = useDimensions();
  const {landscape} = useDeviceOrientation();

  
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.mainView}>
        <SafeAreaView style={{flexDirection: 'row', justifyContent: 'space-evenly', height:'10%', alignItems: 'center'}}>
          <TouchableHighlight>
            <Text>Administration</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>Faculty</Text>
          </TouchableHighlight>
        </SafeAreaView>
        <SafeAreaView style={{flexDirection: 'row',justifyContent: 'space-evenly', height:'10%', alignItems: 'center', width:'100%'}}>
          <TouchableHighlight>
            <Text>Deans</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>Associate Deans</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>HOD</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>HOC</Text>
          </TouchableHighlight>
        </SafeAreaView>
        
        {deans?.sort(function(a, b) {
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
               })
               .map(contact => {
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
          //console.log("country roooooaaads, take me...");
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
    justifyContent: 'space-between',
  },
  navig: {
    width: '100%',
    height: '8%',
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor: "gray",
    //alignSelf: "baseline"
  },
  mainView: {
    width: '100%',
  }
});

export default Contacts;



//css for highlingint tabs  style={{backgroundColor: 'cyan', height: '100%', width:'100%',justifyContent:'center'}}