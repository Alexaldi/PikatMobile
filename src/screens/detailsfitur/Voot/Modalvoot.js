import React, { useState, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Image, Text } from 'native-base';
import Modal from "react-native-modal";
import { sizeHelper } from '../../../Helpers';
import { useNavigation } from '@react-navigation/native';
import { Voting } from '../../../Helpers/API';
import { AppContext } from '../../../store';
const Modalvoot = ({ dataKandidat }) => {
    const [state, dispatch] = useContext(AppContext);
    const [msg, setMsg] = useState('');
    const [modal, setModal] = useState(false);

    const navigation = useNavigation()

    const Vote = async (e) => {
        try {
            await Voting(dataKandidat, state.user_refreshToken).then(res => {
                setMsg(res.data.msg);
            })
            setModal(true)
        } catch (error) {
            if (error.response) {
                alert(error.response.data.msg)
            }
        }
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 50,
                    backgroundColor: '#488D7C',
                    paddingVertical: 15,
                    marginLeft: 70,
                    marginRight: 70,
                    borderRadius: 50,
                    elevation: 8,
                }} onPress={Vote}>
                <Text
                    style={{
                        color: '#ffff'
                    }}>Pilih</Text>
            </TouchableOpacity>
            <Modal isVisible={modal}>
                <View style={{
                    backgroundColor: '#ffffff',
                    paddingVertical: 20,
                    paddingHorizontal: 30,
                    borderRadius: 0,
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        <Image
                            alt="logo-transparent"
                            resizeMode="contain"
                            w={`${sizeHelper(50)}px`}
                            h={`${sizeHelper(50)}px`}
                            borderRadius={'100'}
                            borderColor={'white'}
                            bg={'white'}
                            position='absolute'
                            zIndex={'1'}
                            source={require('../../../images/modal.jpg')}
                        />
                    </View>
                    <Text
                        fontWeight={'bold'}
                        color="black"
                        fontSize={`${sizeHelper(5)}px`}
                        marginTop={`${sizeHelper(30)}px`}
                        textAlign={'center'}
                    >{msg}</Text>

                    <Text
                        textAlign={'center'}
                        color={'#bdbdbd'}
                    >Kamu telah berhasil memilih silahkan tunggu hasil akhir dari pemilihannya</Text>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                            backgroundColor: '#488D7C',
                            paddingVertical: 10,
                            borderRadius: 50,
                            elevation: 8,
                        }} onPress={() => { setModal(false); navigation.navigate('MainContainer') }}
                    >
                        <Text
                            style={{
                                color: '#ffff'
                            }}
                        >Oke</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default Modalvoot;