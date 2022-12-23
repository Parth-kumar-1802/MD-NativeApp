import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, TouchableNativeFeedback, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {client, urlFor} from '../../sanity';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
            <View style={Styles.cardContainer}>
            <Image
                source={{
                uri: urlFor(imgUrl).url(),
                }}

              
                className="h-36 w-64 rounded-lg"
                style ={Styles.imageStyle}

            />
            <View style={{alignItems:'center', marginTop:-20, marginBottom: 15}}>
                <Text style={{fontSize:18, fontWeight: '600'}}>{name}</Text>
                <Text style={{fontSize:15, fontWeight: '500'}}>{position}</Text>
                <View style={{flexDirection:'row'}}>
                    <Icon name="inbox" size={12} color="#000" />
                    <Text style={{paddingHorizontal:5}}>{mail}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Icon name="phone" size={12} color="#000" />
                    <Text style={{paddingHorizontal:5}}>{number}</Text>
                </View>
            </View>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default ContactCard;

const Styles = StyleSheet.create({
    cardContainer :{
        width: 165,
        backgroundColor: '#0ff',
        height: 200,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 7,
        alignItems: 'center',
        alignContent:'center',
        justifyContent: 'flex-end',
        margin: 5,
    },
    imageStyle :{
        height:100,
        width: 100,
        borderRadius: 50,
        marginBottom: 25,
    }
})