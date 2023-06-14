import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Image } from "native-base"
import { ScrollView } from 'react-native';
import Modalvoot from './Modalvoot';
import { useNavigation } from '@react-navigation/native';
import { sizeHelper } from '../../../Helpers'
import { IdKandidat, VotingById } from '../../../Helpers/API';
import jwt_decode from "jwt-decode"
import { AppContext } from '../../../store';

const Detailprofile = ({ route }) => {
    const [KandidatById, setKandidatById] = useState([]);
    const [verify, setverify] = useState("")
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
        getKandidatById();
        cekVoting();
    }, []);

    const cekVoting = async () => {
        let token = jwt_decode(state.user_refreshToken)
        const response = await VotingById(token.userId)
        setverify(response)
    }


    const getKandidatById = async () => {
        const response = await IdKandidat(route.params.id)
        setKandidatById(response.data)
    }

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
                <Image
                    source={{ uri: KandidatById.image_url }}
                    alt="logo-transparent"
                    w={`${sizeHelper(40)}px`}
                    h={`${sizeHelper(40)}px`}
                    borderRadius={'full'}
                />
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
                        value={KandidatById.kandidat_name}
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
                        value={KandidatById.kelas}
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
                    }}>Visi</Text>
                    <TextInput
                        value={KandidatById.visi}
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
                    }}>Misi</Text>
                    <TextInput
                        value={KandidatById.misi}
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
                <View style={{
                    width: '100%',
                    height: 100
                }}>
                    {verify ? alert("Anda telah Memilih") : < Modalvoot dataKandidat={KandidatById.kandidatid} />}
                </View>
            </View>
        </ScrollView>
    );
}
export default Detailprofile;


