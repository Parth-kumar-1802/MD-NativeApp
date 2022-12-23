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

function Menu({navigation}) {
  const [impContacts, setImpContacts] = useState([]);

  useEffect(()=>{
    const query = `*[_type == "contacts"]{...}`
    client.fetch(query).then(data =>{
        setImpContacts(data);
    })
  }, []);
  console.log(impContacts);

  const dimensions = {
    width: "360",
    hieght: "720"
  }

  //console.log(useDimensions());
  //console.log(useDeviceOrientation());
  const Dimensions = useDimensions();
  const {landscape} = useDeviceOrientation();

  
  return (
    <SafeAreaView style={styles.container}>
      {/*||||||||||||||||||||||||||||||||||||||||MAP OF IIT ISM||||||||||||||||||||||||||||||||||||||||||||| */}


      {/* <SafeAreaView style={{
            //alignSelf: "left"
        }}>
        <MapView
          initialRegion={{
          longitude: 86.4412,
          latitude: 23.8183,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          }}
          zoomEnabled={true}
          style={{width: Dimensions.window.width, height: Dimensions.window.height}}
          mapType="mutedStandard"
        >
          <Marker
              coordinate={{
              longitude: 86.4412,
              latitude: 23.8143,
              }}
              identifier="origin"
              pinColor="red"
          />
        </MapView>
      </SafeAreaView> */}


      {/*|||||||||||||||||||||||||||||||||||||||| END OF MAP OF IIT ISM||||||||||||||||||||||||||||||||||||||||||||| */}



      <SafeAreaView style={styles.mainView}>

        <SafeAreaView>
          <SafeAreaView style={styles.contactSection}>
            <Text>Important contacts</Text>
            <SafeAreaView style = {styles.button}>
              <Button
                title="See All"
                onPress={() => navigation.navigate('Contacts')}
              />
            </SafeAreaView>
          </SafeAreaView>
          {impContacts?.sort(function(a, b) {
                if(a._createdAt < b._createdAt) return -1;
                if(a._createdAt > b._createdAt) return 1;
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
  },
  contactSection:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    //padding: '2rem'
  },
  button: {
    width:'20%',
  },
});

export default Menu;