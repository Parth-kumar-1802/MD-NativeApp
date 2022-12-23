import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, TouchableNativeFeedback, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import client from '../../sanity';
import Icon from 'react-native-vector-icons/FontAwesome';

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


      <ScrollView style={{width:'95%', marginTop:10}}>
      <SafeAreaView style={{width:'100%', height:'93%'}}>
      <TouchableNativeFeedback onPress={() => {
          navigation.navigate('#');
        }}>
          <View style={styles.menu_item}>
          <Icon name="phone"
          size={18}
          color="#000" style={{marginHorizontal:10}}/>
          <Text style={styles.menu_text}>Contact Us</Text></View>
        </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => {
          navigation.navigate('#');
        }}>
          <View style={styles.menu_item}>
          <Icon name="user"
          size={18}
          color="#000" style={{marginHorizontal:10}}/>
          <Text style={styles.menu_text}>People</Text></View>
        </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => {
          navigation.navigate('#');
        }}>
          <View style={styles.menu_item}>
          <Icon name="calendar"
          size={18}
          color="#000" style={{marginHorizontal:10}}/>
          <Text style={styles.menu_text}>Academic Calender</Text></View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => {
          navigation.navigate('#');
        }}>
          <View style={styles.menu_item}>
          <Icon name="external-link"
          size={18}
          color="#000" style={{marginHorizontal:10}}/>
          <Text style={styles.menu_text}>Parent Portal</Text></View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => {
          navigation.navigate('#');
        }}>
          <View style={styles.menu_item}>
          <Icon name="calendar-check-o"
          size={18}
          color="#000" style={{marginHorizontal:10}}/>
          <Text style={styles.menu_text}>Holidays Calender</Text></View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => {
          navigation.navigate('#');
        }}>
          <View style={styles.menu_item}>
          <Icon name="spoon"
          size={18}
          color="#000" style={{marginHorizontal:13}}/>
          <Text style={styles.menu_text}>Mess Menu</Text></View>
      </TouchableNativeFeedback>
      </SafeAreaView>
       </ScrollView>
      <ScrollView style={{width:'95%', marginTop:10}}>
      <SafeAreaView style={{width:'100%', height:'93%'}}>
        <SafeAreaView style={styles.contactSection}>
          <Text>Important contacts</Text>
          <SafeAreaView style = {styles.button}>
            <Button
              title="See All"
              onPress={() => navigation.navigate('Contacts')}
            />
          </SafeAreaView>
        </SafeAreaView>
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
    </ScrollView>
    {/* <View style={{
      backgroundColor: "#fff",
      flex: 1,
    }}>
      <View style={{
      backgroundColor: "#f00",
      flex: 1,}}/>
      <View style={{
      backgroundColor: "#0f0",
      flex: 1,}}/>
      <View style={{
      backgroundColor: "#00f",
      flex: 1,}}>
      </View>
    </View> */}
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
  },
  menu_item: {
    flexDirection:'row',
    borderWidth:1,
    borderColor: '#000',
    borderRadius:5,
    backgroundColor: '#efff',
    marginHorizontal:20,
    marginVertical: 5,
    paddingVertical:5,
  },
  menu_text: {
    alignSelf: 'flex-start',
    borderColor: '#fff',

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