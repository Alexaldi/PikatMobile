import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'native-base';
import { sizeHelper } from '../../Helpers';
import { API_KEY } from '@env'
import axios from 'axios'

import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';

import {
  Box,
  Button,
  Image
} from "native-base";
import { register } from '../../Helpers/API';

const Register = ({ navigation }) => {
  const [nisn, setNisn] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setconfPassword] = useState('');

  const Register = async (e) => {
    if (!nisn.trim() && !password.trim()) {
      alert('Masukan Data Terlebih Dahulu');
      return;
    }
    if (!nisn.trim()) {
      alert('Masukan NISN');
      return;
    }
    if (!password.trim()) {
      alert('Masukan Password');
      return
    }
    if (!confPassword.trim()) {
      alert('Masukan Konfirmasi Password');
      return
    }
    try {
      await register(
        nisn,
        password,
        confPassword
      ).then(res => {
        alert(res.data.msg);
      })
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.msg);
      }
    };
  }
  return (

    <View style={{ flex: 1, backgroundColor: '#488D7C' }}>
      <ScrollView>

        <StatusBar backgroundColor={'#488D7C'} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 90 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '450',
              color: '#FFFFFF'
            }}>DAFTAR
          </Text>
        </View>

        <Box
          justifyContent={'center'}
          alignItems={'center'}
          mt={`${sizeHelper(10)}px`}
        >
          <Image
            source={require('../../images/daftar.png')}
            alt="logo-transparent"
            w={`${sizeHelper(60)}px`}
            h={`${sizeHelper(30, 'h')}px`}
            resizeMode="contain"
          />
        </Box>

        <View style={{ flexDirection: 'row', marginHorizontal: 30, elevation: 5 }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 50,
            height: 50,
            marginTop: 40
          }}>
            <Icon name="id-card" size={25} color="#bdbdbd" />
          </View>
          <TextInput
            value={nisn}
            keyboardType='numeric'
            onChangeText={text => setNisn(text)}
            style={{
              // marginHorizontal: 30, 
              backgroundColor: '#FFFFFF',
              marginBottom: 10,
              paddingLeft: 20,
              marginTop: 40,
              height: 50,
              flex: 1,
            }} placeholder="Masukan NISN"
          />
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 30 }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 50,
            height: 50
          }}>
            <Icon name="lock" size={25} color="#bdbdbd" />
          </View>
          <TextInput
            value={password}
            keyboardType='password-address'
            onChangeText={text => setPassword(text)}
            style={{
              backgroundColor: '#FFFFFF',
              marginBottom: 10,
              paddingLeft: 20,
              height: 50,
              flex: 1
            }} placeholder="Masukan Passwod"
            secureTextEntry={true}
          />
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 30 }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 50,
            height: 50
          }}>
            <Icon name="lock" size={25} color="#bdbdbd" />
          </View>
          <TextInput
            value={confPassword}
            keyboardType='password-address'
            onChangeText={text => setconfPassword(text)}
            style={{
              backgroundColor: '#FFFFFF',
              marginBottom: 10,
              paddingLeft: 20,
              height: 50,
              flex: 1
            }} placeholder="Masukan Konfirmasi Password"
            secureTextEntry={true}
          />
        </View>

        <Box>
          <Button
            bg={'#397566'}
            w={`${sizeHelper(40)}px`}
            h={`${sizeHelper(15)}px`}
            marginTop={`${sizeHelper(5)}px`}
            marginLeft={`${sizeHelper(30)}px`}

            justifyContent={'center'}
            alignItems={'center'}
            shadow={'6'}
            borderRadius={'3xl'}
            onPress={Register}>
            <Text style={{ fontWeight: 'bold', color: '#FFFFFF', fontSize: 18 }}>Register</Text>
          </Button>
        </Box>
      </ScrollView>
    </View>
  )
};

export default Register;