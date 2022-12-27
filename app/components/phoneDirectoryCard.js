import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, TouchableNativeFeedback, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {client, urlFor} from '../../sanity';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

const ContactCard = ({
    // key,
    // id,
    imgUrl,
    name,
    position,
    mail,
    number
}) => {
    const navigation = useNavigation();
    return(
        <View style={Styles.cardContainer}>
            <Image
                source={{
                uri: urlFor(imgUrl).url(),
                }}
                style ={Styles.imageStyle}
            />
            <View style={{ marginTop:-20, marginBottom: 15,flexDirection:"column" ,justifyContent:"center", alignContent:"center", width:"80%" }}>
                <SafeAreaView><Text style={{fontSize:15, fontWeight: '600'}}>{name}</Text></SafeAreaView>
                <SafeAreaView><Text style={{fontSize:12, fontWeight: '500'}}>{position}</Text></SafeAreaView>
                <View style={{flexDirection:'row', alignContent:"center"}}>
                    <Icon name="mail" size={12} color="#000" />
                    <Text style={{paddingHorizontal:5, fontSize:10}}>{mail}</Text>
                </View>
                <View style={{flexDirection:'row',alignContent:"center"}}>
                    <Icon name="call" size={12} color="#000" />
                    <Text style={{paddingHorizontal:5, fontSize:10}}>{number}</Text>
                </View>
            </View>
        </View>
    )
}

export default ContactCard;

const Styles = StyleSheet.create({
    cardContainer :{
        width: '100%',
        height:100,
        backgroundColor: '#efefef',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 7,
        flexDirection:'row'
    },
    imageStyle :{
        height:80,
        width: 80,
        margin:10,
        marginRight:20,
        borderRadius: 2100,
    }
})