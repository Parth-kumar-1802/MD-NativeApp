// import React, {useEffect, useState} from 'react';
// import { View, StyleSheet, Text, Platform } from 'react-native';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
// import MapView, {Marker} from 'react-native-maps';

// export default function Map() {
//     const Dimensions = useDimensions();
//     const mapdimensions = {
//         width: "360",
//         hieght: "720"
//     }
//     console.log(Dimensions);
//     return (
//         <View style={{
//             //alignSelf: "left"
//         }}>
//             <MapView
//                 initialRegion={{
//                 longitude: 86.4412,
//                 latitude: 23.8183,
//                 latitudeDelta: 0.01,
//                 longitudeDelta: 0.01,
//                 }}
//                 zoomEnabled={true}
//                 style={{width: Dimensions.window.width, height: Dimensions.window.height}}
//                 mapType="mutedStandard"
//             >
//                 <Marker
//                     coordinate={{
//                     longitude: 86.4412,
//                     latitude: 23.8143,
//                     }}
//                     identifier="origin"
//                     pinColor="red"
//                 />
//             </MapView>
//         </View>
//     )
// }
