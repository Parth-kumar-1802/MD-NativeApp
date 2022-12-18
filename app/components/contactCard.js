import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, TouchableNativeFeedback, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {client, urlFor} from '../../sanity';
import { useNavigation } from "@react-navigation/native";

const ContactCard = ({
    key,
    id,
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
                className="h-36 w-64 rounded-lg"
            />
            <SafeAreaView>
                <Text>{name}</Text>
                <Text>{position}</Text>
                <Text>{mail}</Text>
                <Text>{number}</Text>
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default ContactCard