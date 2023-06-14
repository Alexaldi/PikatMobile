import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Box, Image, Button, Text } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { sizeHelper } from '../../../Helpers';
import { ShowKandidat } from '../../../Helpers/API';



const Profilevoot = () => {
    const [Kandidat, setKandidat] = useState([]);

    useEffect(() => {
        getKandidat();
    }, []);

    const getKandidat = async () => {
        const response = await ShowKandidat();
        setKandidat(response.data);
    };

    const navigation = useNavigation()
    return (
        <View>

            <SafeAreaView>
                <Box
                    flexDirection={'column'}
                    marginTop={`${sizeHelper(3)}px`}
                >

                    {Kandidat.map((Kandidat) => {
                        return <>

                            <Box key={Kandidat.id + "main"}>
                                <Button
                                    bg={'white'}
                                    borderBottomLeftRadius={'full'}
                                    borderBottomRightRadius={'full'}
                                    borderTopLeftRadius={'full'}
                                    borderTopRightRadius={'full'}
                                    w={`${sizeHelper(80)}px`}
                                    h={`${sizeHelper(20)}px`}
                                    ml={`${sizeHelper(5)}px`}
                                    shadow={'6'}
                                    onPress={() => navigation.navigate('Detailprofile', {
                                        id: Kandidat.kandidatid
                                    })}>
                                    <Box
                                        flexDirection={'row'}>
                                        <Box
                                            w={`${sizeHelper(20)}px`}
                                            ml={`${sizeHelper(5)}px`}
                                            mt={`${sizeHelper(2)}px`}>

                                            <Image
                                                source={{ uri: Kandidat.image_url }}
                                                alt="logo-transparent"
                                                w={`${sizeHelper(15)}px`}
                                                h={`${sizeHelper(15)}px`}
                                                borderRadius={'full'}
                                            />
                                        </Box>
                                        <Box w={`${sizeHelper(50)}px`}
                                            mt={`${sizeHelper(5)}px`}>
                                            <Text
                                                fontSize={`${sizeHelper(4)}px`}
                                                color={"black"}
                                            >{Kandidat.kandidat_name}</Text>
                                        </Box>
                                    </Box>

                                </Button>
                            </Box>
                        </>
                    })}
                </Box>
            </SafeAreaView>

        </View>
    )
}

export default Profilevoot;