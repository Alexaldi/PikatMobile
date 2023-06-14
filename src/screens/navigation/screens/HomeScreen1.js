import React, { useState, useEffect, useContext } from 'react';
import { Box, Image } from 'native-base';
import { ScrollView, View } from 'react-native';
import { sizeHelper } from '../../../Helpers';
import jwt_decode from "jwt-decode";
// import Carousel from 'react-native-snap-carousel';

import Fitur from '../../homescreen/components/Fitur';
import Slide from '../../homescreen/components/Slide';
import Profile from '../../homescreen/components/Profile';
import { AppContext } from '../../../store';
import { getUserData, RefreshToken } from '../../../Helpers/API';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


export default function HomeScreen({ navigation }) {

    const [UsersById, setUsersById] = useState("");
    const [state, dispatch] = useContext(AppContext);
    const [User, setUser] = useState("")
    const [Expired, setExpired] = useState("");
    const [Token, setToken] = useState("");
    const [Axios, setAxios] = useState("");
    useEffect(() => {
        // refreshtoken();
        getUserById();
    }, []);

    const rutes = useNavigation()
    setToken(state.user_token)
    const decode = jwt_decode(Token)
    setUser(decode.nisn)
    setExpired(decode.exp)

    // const refreshtoken = async () => {
    //     try {
    //     } catch (error) {
    //         rutes.navigate('Login')
    //     }
    // }

    // const axiosJWT = axios.create()
    // axiosJWT.interceptors.request.use(async (config) => {
    //     const currentDate = new Date()
    //     if (Expired * 1000 <= currentDate.getTime()) {
    //         const response = await RefreshToken(state.user_refreshToken)
    //         config.headers.Authorization = `Bearer ${response.data.accesToken}`
    //         setToken(response.data.accesToken)
    //         setUser(decode.nisn)
    //         setExpired(decode.exp)
    //     }
    //     // return config;
    // }, (error) => {
    //     return promise.reject(error);
    // })

    const getUserById = async () => {
        const response = await getUserData(User, Token);
        setUsersById(response.data[0].nama_siswa);
    };

    return (
        <ScrollView
            style={{
                backgroundColor: "#488D7C",
            }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <Box
                h={`${sizeHelper(90)}px`}

            >
                <Image source={require('../../../images/home.png')}
                    alt="logo-transparent"
                    w={`${sizeHelper(75)}px`}
                    h={`${sizeHelper(50, 'h')}px`}
                    resizeMode="contain"
                    ml={`${sizeHelper(14)}px`}
                />
            </Box>

            <View style={{
                backgroundColor: "#FFFFFF",
                borderTopLeftRadius: 45,
                borderTopRightRadius: 45,
                height: 800,
                paddingHorizontal: 16,


            }}>
                <Box
                    flexDirection={'row'}
                    w={`${sizeHelper(50)}px`}
                    h={`${sizeHelper(15, 'h')}px`}
                >
                    <Profile
                        name={UsersById}
                        profile={require('../../../images/profile.png')}
                        alt="logo-transparent"
                    />
                </Box>
                <View style={{
                    flexDirection: "row",
                    paddingBottom: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Slide />
                        {/* <Carousel
                    ref={c => {
                        this._carousel = c;
                    }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
                    /> */}
                    </View>

                </View>

                <Fitur />

            </View>


        </ScrollView>

    );
}
