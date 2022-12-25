import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, TouchableNativeFeedback, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import client from '../../sanity';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {Marker} from 'react-native-maps';

import ContactCard from '../components/contactCard';

function Menu({navigation}) {
    const [impContacts, setImpContacts] = useState([]);

    useEffect(()=>{
        const query = `*[_type == "contacts"]{...}`
        client.fetch(query).then(data =>{
            setImpContacts(data);
        })
    }, []);
    console.log(impContacts);
    let Dimensions=useDimensions();
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


      <ScrollView style={{width:'95%', marginTop:10, height:"50%"}}>
        <SafeAreaView style={{width:'100%', height:'93%'}}>
          <TouchableNativeFeedback onPress={() => {
              //navigation.navigate('#');
            }}>
              <View style={{backgroundColor:"red",height:'20%', overflow:"hidden", margin:10, borderRadius:20, shadowColor: '#000',shadowOffset: { width: 5,height: 4,},shadowOpacity: 0.25,shadowRadius: 20, }}>
                <MapView
                  initialRegion={{
                  longitude: 86.4417,
                  latitude: 23.8080,
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
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {
              //navigation.navigate('#');
            }}>
              <View style={styles.menu_item}>
              <Icon name="call"
              size={22}
              color="#000" style={{marginRight:20}}/>
              <Text style={styles.menu_text}>Contact Us</Text></View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {
              //navigation.navigate('#');
            }}>
              <View style={styles.menu_item}>
              <Icon name="people"
              size={22}
              color="#000" style={{marginRight:20}}/>
              <Text style={styles.menu_text}>People</Text></View>
            </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {
              //navigation.navigate('#');
            }}>
              <View style={styles.menu_item}>
              <Icon name="calendar"
              size={22}
              color="#000" style={{marginRight:20}}/>
              <Text style={styles.menu_text}>Academic Calender</Text></View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {
              //navigation.navigate('#');
            }}>
              <View style={styles.menu_item}>
              <Icon name="earth"
              size={22}
              color="#000" style={{marginRight:20}}/>
              <Text style={styles.menu_text}>Parent Portal</Text></View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {
              //navigation.navigate('#');
            }}>
              <View style={styles.menu_item}>
              <Icon name="calendar"
              size={22}
              color="#000" style={{marginRight:20}}/>
              <Text style={styles.menu_text}>Holidays Calender</Text></View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {
              //navigation.navigate('#');
            }}>
              <View style={styles.menu_item}>
              <Icon name="restaurant"
              size={22}
              color="#000" style={{marginRight:23}}/>
              <Text style={styles.menu_text}>Mess Menu</Text></View>
          </TouchableNativeFeedback>
        </SafeAreaView>
      </ScrollView>
      
      <SafeAreaView style={styles.contactSection}>
          <Text style={{fontSize:18, fontWeight: '600', padding:5, color:'white'}}>Important Contacts</Text>
          <SafeAreaView style = {styles.button}>
            <Button
              title="See All"
              onPress={() => navigation.navigate('Contacts')}
            />
          </SafeAreaView>
        </SafeAreaView>
      <SafeAreaView style={{width:'100%', flexDirection:"row" , display:'flex',alignContent:'space-around'}}>
      <ScrollView horizontal={true} style={{width:'10%', marginTop:10}}>
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
         </ScrollView>
       </SafeAreaView>
    
    
    <SafeAreaView style={styles.navig}>
        <TouchableNativeFeedback onPress={() => {
          //console.log("country roads");
          navigation.navigate('Home');
        }}>
          <View style={{alignItems: 'center'}}>
          <Icon name="home-outline"
          size={25}
          color="#fff" />
          <Text style={{color:'#fff'}}>ISM</Text></View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          //console.log("Placements");
          navigation.navigate('Placementor');
        }}>
          <View style={{alignItems: 'center'}}>
          <Icon name="bar-chart-outline"
          size={25}
          color="#fff" />
          <Text style={{color:'#fff'}}>Placementor</Text></View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          //console.log("socials media addict");
          navigation.navigate('Ismgram');
        }}>
          <View style={{alignItems: 'center'}}>
          <Icon name="people-outline"
          size={25}
          color="#fff" />
          <Text style={{color:'#fff'}}>ISMgram</Text></View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          //console.log("DSW ka number");
          navigation.navigate('Menu');
        }}>
          <View style={{alignItems: 'center'}}>
          <Icon name="list"
          size={25}
          color="#000" />
          <Text style={{color:'#000'}}>Others</Text></View>
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
    backgroundColor: "#c0c0c8",
  },
  menu_item: {
    flexDirection:'row',
    // borderWidth:1,
    // borderColor: '#000',
    // borderRadius:5,
    // backgroundColor: '#efff',
    marginHorizontal:20,
    marginVertical: 5,
    paddingVertical:5,
  },
  menu_text: {
    alignSelf: 'flex-start',
    borderColor: '#fff',
    fontSize: 20,
    fontWeight: '500'
  },
  contactSection:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#c0c0c8',
    borderRadius:5,
    width:"100%"
    //padding: '2rem'
  },
  button: {
    width:'25%',
    borderWidth:3,
    borderRadius:5,
    borderColor:'transparent'
  },
});
export default Menu;