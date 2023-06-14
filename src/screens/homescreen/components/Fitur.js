import React from "react";
import { useState, useEffect } from "react";
import { sizeHelper } from '../../../Helpers';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import { Box, Text, Image, Button } from "native-base";

const Fitur = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Box
        justifyContent={'center'}
        flexDirection={'row'}
        marginBottom={`${sizeHelper(1)}px`}
        marginTop={`${sizeHelper(2)}px`}
      >
        {/* <Button
                  bg={'#fff'}
                  marginRight={`${sizeHelper(1)}px`}
                  borderTopLeftRadius={'2xl'}
                  borderTopRightRadius={'2xl'}
                  borderBottomLeftRadius={'2xl'}
                  borderBottomRightRadius={'2xl'}
                  w={`${sizeHelper(28)}px`}
                  h={`${sizeHelper(28)}px`}
                  shadow={'6'}
                 
              onPress={() => navigation.navigate('Pembinaan')}
              >
                <Image source={require('../../../images/pembinaan.png')}
                alt="logo-transparent"
                  w={`${sizeHelper(20)}px`}
                  h={`${sizeHelper(20)}px`}
                    resizeMode="contain"
                  />
                  <Text 
                        marginLeft={`${sizeHelper(2.5)}px`}
                        fontSize={`${sizeHelper(3)}px`}
                        color={'black'}
                        >Pembinaan</Text>
              </Button> */}

        {/* <Button
                  bg={'#fff'}
                  marginRight={`${sizeHelper(1)}px`}
                  borderTopLeftRadius={'2xl'}
                  borderTopRightRadius={'2xl'}
                  borderBottomLeftRadius={'2xl'}
                  borderBottomRightRadius={'2xl'}
                  w={`${sizeHelper(28)}px`}
                  h={`${sizeHelper(28)}px`}
                  shadow={'6'}
                 
              onPress={() => navigation.navigate('Seragam')}
              >
                <Image source={require('../../../images/seragam.png')}
                alt="logo-transparent"
                  
                  w={`${sizeHelper(20)}px`}
                  h={`${sizeHelper(20)}px`}
                    resizeMode="contain"
                    
                  />
                  <Text 
                        marginLeft={`${sizeHelper(3.5)}px`}
                        fontSize={`${sizeHelper(3)}px`}
                        color={'black'}
                        >Seragam</Text>
              </Button> */}
        <Button
          bg={'#fff'}
          borderTopLeftRadius={'2xl'}
          borderTopRightRadius={'2xl'}
          borderBottomLeftRadius={'2xl'}
          borderBottomRightRadius={'2xl'}
          w={`${sizeHelper(28)}px`}
          h={`${sizeHelper(28)}px`}
          shadow={'6'}

          onPress={() => navigation.navigate('Voot')}
        >

          <Image source={require('../../../images/vooting.png')}
            alt="logo-transparent"
            w={`${sizeHelper(20)}px`}
            h={`${sizeHelper(20)}px`}
            resizeMode="contain"
          />
          <Text
            marginLeft={`${sizeHelper(4)}px`}
            fontSize={`${sizeHelper(3)}px`}
            color={'black'}
          >Voting</Text>
        </Button>

      </Box>
      {/* <Box
        flexDirection={'row'}
        justifyContent={'center'}>
        <Button
          marginRight={`${sizeHelper(1)}px`}
          bg={'#fff'}
          borderTopLeftRadius={'2xl'}
          borderTopRightRadius={'2xl'}
          borderBottomLeftRadius={'2xl'}
          borderBottomRightRadius={'2xl'}
          w={`${sizeHelper(28)}px`}
          h={`${sizeHelper(28)}px`}
          shadow={'6'}

          onPress={() => navigation.navigate('Pguru')}
        >
          <Image source={require('../../../images/penilaianguru.png')}
            alt="logo-transparent"
            w={`${sizeHelper(20)}px`}
            h={`${sizeHelper(20)}px`}
            resizeMode="contain"
          />
          <Text
            marginLeft={`${sizeHelper(3.5)}px`}
            fontSize={`${sizeHelper(3)}px`}
            color={'black'}
          >Penilaian</Text>
        </Button>

        <Button
          bg={'#fff'}
          marginRight={`${sizeHelper(1)}px`}
          borderTopLeftRadius={'2xl'}
          borderTopRightRadius={'2xl'}
          borderBottomLeftRadius={'2xl'}
          borderBottomRightRadius={'2xl'}
          w={`${sizeHelper(28)}px`}
          h={`${sizeHelper(28)}px`}
          shadow={'6'}

          onPress={() => navigation.navigate('Rapot')}
        >
          <Image source={require('../../../images/rapot.png')}
            alt="logo-transparent"
            w={`${sizeHelper(20)}px`}
            h={`${sizeHelper(20)}px`}
            resizeMode="contain"
          />
          <Text
            marginLeft={`${sizeHelper(5.5)}px`}
            fontSize={`${sizeHelper(3)}px`}
            color={'black'}
          >Rapot</Text>
        </Button>

        <Button
          bg={'#fff'}
          borderTopLeftRadius={'2xl'}
          borderTopRightRadius={'2xl'}
          borderBottomLeftRadius={'2xl'}
          borderBottomRightRadius={'2xl'}
          w={`${sizeHelper(28)}px`}
          h={`${sizeHelper(28)}px`}
          shadow={'6'}

          onPress={() => navigation.navigate('Eskul')}
        >
          <Image source={require('../../../images/eskul.png')}
            alt="logo-transparent"
            w={`${sizeHelper(20)}px`}
            h={`${sizeHelper(20)}px`}
            resizeMode="contain"
          />
          <Text
            marginLeft={`${sizeHelper(6)}px`}
            fontSize={`${sizeHelper(3)}px`}
            color={'black'}
          >Eskul</Text>
        </Button>

      </Box> */}
    </SafeAreaView>
  )
}

export default Fitur;