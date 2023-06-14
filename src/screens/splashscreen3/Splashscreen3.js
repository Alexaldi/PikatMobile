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



const Splashscreen3 = () => {

    const navigation = useNavigation()
    const { colors } = useTheme();
    return (
    <View style = {{flex: 1, backgroundColor: '#488D7C'}}>

      <StatusBar backgroundColor= {'#488D7C'}/>
      <View style ={{justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 100}}>
        <Text 
          color="white" 
        fontSize={`${sizeHelper(10)}px`} 
        fontWeight="bold"
        marginLeft={`${sizeHelper(10)}px`}>
            Let's Start{'\n'}With Pikat
        </Text>
      </View>
      <Box
        flex={1}
        mb={`${sizeHelper(10)}px`}
        >
      
      <Button 
      borderRadius={`${sizeHelper(16)}px`}
          w={`${sizeHelper(35)}px`}
          h={`${sizeHelper(20)}px`}
          paddingRight={`${sizeHelper(10)}px`}
          marginLeft={`${sizeHelper(50)}px`}   
          bg={'#FFFFFF'}
        onPress={() => navigation.navigate('Login')}>
        <Text
        color="#397566" 
        fontSize={`${sizeHelper(5)}px`} 
        fontWeight="bold"
        marginLeft={`${sizeHelper(5)}px`} 
        >Start</Text>
      </Button>
      </Box>

      <View style ={{flex: 1, justifyContent: 'space-evenly' , alignItems: 'flex-end', marginBottom: 180, marginRight: 15}}>
        <Image 
          source={require('../../images/splash3.png')}
          alt="logo-transparent"
          w={`${sizeHelper(80)}px`}
          h={`${sizeHelper(70, 'h')}px`}
          resizeMode="contain"
          mt={sizeHelper(10, 'h')}
        />
      </View>
      
    </View>
    )
};

export default Splashscreen3;