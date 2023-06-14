import React, { useState, useEffect } from 'react';
import { useTheme } from 'native-base';
import { sizeHelper  } from '../../Helpers';
import { useNavigation } from '@react-navigation/native';

import { 
  View, 
  StatusBar,
 } from 'react-native';

 import {
  Box,
  Button,
  Image,
  Text
  } from "native-base";


const Splashscreen2 = () => {

    const navigation = useNavigation()
    const { colors } = useTheme();
    return (
    <View style = {{flex: 1, backgroundColor: '#488D7C'}}>

      <StatusBar backgroundColor= {'#488D7C'}/>
      <View style ={{justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 50}}>
        <Text 
        color="white" 
        fontSize={`${sizeHelper(9)}px`} 
        fontWeight="bold"
        marginLeft={`${sizeHelper(10)}px`}>
            Pikat is on{'\n'}Application to Make{'\n'}It Easier for{'\n'}School Residents
        </Text>
      </View>
      <View style ={{flex: 1, justifyContent: 'space-evenly' , alignItems: 'flex-end', marginTop: 200}}>
        <Image 
          source={require('../../images/splash2.png')}
          alt="logo-transparent"
          w={`${sizeHelper(60)}px`}
          h={`${sizeHelper(70, 'h')}px`}
          resizeMode="contain"
              mb={sizeHelper(20, 'h')}
        />
      </View>
      <View style= {{flex: 1, marginBottom: 30}}>
      <Button 
      borderRadius={`${sizeHelper(16)}px`}
          w={`${sizeHelper(35)}px`}
          h={`${sizeHelper(20)}px`}
          paddingRight={`${sizeHelper(10)}px`}
          marginLeft={`${sizeHelper(10)}px`}
          bg={'#FFFFFF'}
        onPress={() => navigation.navigate('Splashscreen3')}>
        <Text
        color="#397566" 
        fontSize={`${sizeHelper(5)}px`} 
        fontWeight="bold"
        marginLeft={`${sizeHelper(5)}px`} 
        >Next</Text>
      </Button>
      </View>
      
    </View>
    )
};

export default Splashscreen2;