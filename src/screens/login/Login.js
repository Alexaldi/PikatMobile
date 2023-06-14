import React, { useState, useEffect, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'native-base';
import { sizeHelper } from '../../Helpers';
import { login } from '../../Helpers/API';
import { AppContext } from '../../store';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';

import {
  Box,
  Button,
  Image
} from "native-base";



const Login = ({ navigation }) => {
  const [nisn, setNisn] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    if (state.userisLoggedIn) {
      navigation.navigate('Main')
    }
  }, [state])


  const Auth = async (e) => {
    if (!nisn.trim() && !password.trim()) {
      alert('Login Terlebih Dahulu');
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
    try {
      await login(nisn, password)
        .then(response => {
          dispatch({
            type: "SET_TOKEN", payload: {
              token: response.data.accessToken,
              refreshToken: response.data.refreshToken
            }
          })
          dispatch({
            type: "SET_ISLOGGEDIN", payload: true
          })
        })
      navigation.navigate('MainContainer');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg)
      }
    }
  }
  return (

    <View style={{ flex: 1, backgroundColor: '#488D7C' }}>
      <ScrollView>
        <Text>
          {msg}
        </Text>
        <StatusBar backgroundColor={'#488D7C'} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 90 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '450',
              color: '#FFFFFF'
            }}>LOGIN
          </Text>
        </View>

        <Box
          justifyContent={'center'}
          alignItems={'center'}
          mt={`${sizeHelper(10)}px`}
        >
          <Image
            source={require('../../images/login.png')}
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
            onPress={Auth}>
            <Text style={{ fontWeight: 'bold', color: '#FFFFFF', fontSize: 18 }}>Login</Text>
          </Button>
        </Box>
        <View style={{ marginHorizontal: 20, flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 11 }}>Belum punya Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: '#FFFFFF', fontSize: 11 }}> Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
  ;

export default Login;