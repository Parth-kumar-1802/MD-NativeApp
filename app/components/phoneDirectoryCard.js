import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, TouchableNativeFeedback, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {client, urlFor} from '../../sanity';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

const DirCard = ({
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
            <Image
                source={{
                uri: urlFor(imgUrl).url(),
                }}
            />
            <Text>{name}</Text>
            <Text>{position}</Text>
            <Text>{mail}</Text>
            <Text>{number}</Text>
        </SafeAreaView>
    )
}

export default DirCard;

const Styles = StyleSheet.create({
    
})