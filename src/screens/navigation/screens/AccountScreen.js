import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import { getUserData } from '../../../Helpers/API';
import { AppContext } from '../../../store';
import jwt_decode from "jwt-decode";
import axios from 'axios';

export default function AccountScreen({ navigation }) {
    const [UsersById, setUsersById] = useState("");
    const [state, dispatch] = useContext(AppContext);
    useEffect(() => {
        getUserById();
    }, []);

    token = state.user_refreshToken;
    const decode = jwt_decode(token)
    const userId = decode.nisn

    const getUserById = async () => {
        const response = await getUserData(userId);
        setUsersById(response.data[0]);
    };
    console.log(UsersById);
    return (
        <ScrollView
            style={{
                backgroundColor: "#488D7C",
            }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={{
                height: 260,
                position: 'relative',
                display: "flex",
                alignItems: "center",
                "justifyContent": "center"
            }}>
                <Image source={require('../../../images/profil.png')} style={{
                    width: '50%',
                    resizeMode: 'contain'
                }} />
            </View>
            <View
                style={{
                    backgroundColor: "#fff",
                    flex: 1,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    flexDirection: 'column'
                }}>
                <View style={{
                    flexDirection: 'column',
                    marginHorizontal: 30,
                    marginVertical: 30,
                    marginRight: 30
                }}>
                    <Text style={{
                        fontWeight: '500'
                    }}>Nama</Text>
                    <TextInput
                        value={UsersById.nama_siswa}
                        editable={false}
                        style={{
                            backgroundColor: '#fff',
                            marginBottom: 10,
                            paddingLeft: 20,
                            width: '100%',
                            height: 50,
                            marginTop: 10,
                            flex: 1,
                            elevation: 5

                        }} />

                    <Text style={{
                        fontWeight: '500'
                    }}>Kelas</Text>
                    <TextInput
                        value={UsersById.kelas + " " + UsersById.jurusan}
                        editable={false}
                        style={{
                            backgroundColor: '#fff',
                            marginBottom: 10,
                            paddingLeft: 20,
                            width: '100%',
                            height: 50,
                            marginTop: 10,
                            flex: 1,
                            elevation: 5
                        }} />

                    <Text style={{
                        fontWeight: '500'
                    }}>Sekolah</Text>
                    <TextInput
                        value={UsersById.sekolah}
                        editable={false}
                        style={{
                            backgroundColor: '#fff',
                            marginBottom: 10,
                            paddingLeft: 20,
                            width: '100%',
                            height: 50,
                            marginTop: 10,
                            flex: 1,
                            elevation: 5
                        }} />

                    <Text style={{
                        fontWeight: '500'
                    }}>Alamat</Text>
                    <TextInput
                        value={UsersById.alamat}
                        editable={false}
                        style={{
                            backgroundColor: '#fff',
                            marginBottom: 10,
                            paddingLeft: 20,
                            width: '100%',
                            height: 50,
                            marginTop: 10,
                            flex: 1,
                            elevation: 5
                        }} />

                </View>
                {/* <View style={{
                    width: '100%',
                    height: 100
                }}> */}

                {/* <TouchableOpacity style={{
                    backgroundColor: '#397566', 
                    paddingVertical: 15, 
                    marginHorizontal: 120, 
                    marginTop: 10,
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    elevation: 3,
                    borderRadius: 10
                    }}
                    // onPress={() => navigation.navigate('MainContainer')}
                    >
                    <Text style={{fontWeight: 'bold', color: '#FFFFFF', fontSize: 18}}>Pilih</Text>
                </TouchableOpacity> */}
                {/* </View> */}
            </View>
        </ScrollView>
    );
}