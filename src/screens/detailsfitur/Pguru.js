import React, {useState,useEffect} from 'react';
import { View, Text,Image,TextInput,TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';


export default function Pguru ({ navigation }) {
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
                <Image source={require('../../images/Pguru.png')} style={{
                    width: '50%',
                    height: 180,
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