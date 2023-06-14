import React, {useState,useEffect} from 'react';
import { View, Text,Image,TextInput,TouchableOpacity, ScrollView} from 'react-native';


export default function Seragam ({ navigation }) {
    return(
        <ScrollView
            style={{
                backgroundColor: "#488D7C",
            }}
            contentContainerStyle={{flexGrow: 1}}
        >
            <View style={{
                height: 260,
                position: 'relative',
                display: "flex",
                alignItems: "center",
                "justifyContent": "center"
            }}>
                <Image source={require('../../images/Seragam1.png')} style={{
                    width: '50%',
                    height: 180,
                    marginLeft:30,
                    marginTop: 50,
                    resizeMode: 'contain'
                }} />
            </View>
            <View
                style={{
                    backgroundColor: "#ffffff",      
                    flex: 1,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    flexDirection: 'column'
                }}>
                 
            </View>
        </ScrollView>
    )
}