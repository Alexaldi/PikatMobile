import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Box, Image, Button, Text } from "native-base";
// screens
import Profilevoot from './Voot/Profilevoot';
import { sizeHelper } from '../../Helpers';

const Voot = () => {
    return (
        <ScrollView
            style={{
                backgroundColor: "#488D7C",
            }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View>
                <Box
                    h={`${sizeHelper(90)}px`}


                >
                    <Image source={require('../../images/Vooting1.png')}
                        alt="logo-transparent"
                        w={`${sizeHelper(50)}px`}
                        h={`${sizeHelper(50, 'h')}px`}
                        resizeMode="contain"
                        ml={`${sizeHelper(25)}px`}
                    />
                </Box>

                <View style={{
                    backgroundColor: "#FFFFFF",
                    borderTopLeftRadius: 45,
                    borderTopRightRadius: 45,
                    height: 450,
                    paddingHorizontal: 16,
                }}>
                    <View style={{
                        paddingTop: 50,
                        height: '100%',

                    }}>
                        <View style={{
                            width: "60%",
                            height: 30,
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Text
                                fontSize={`${sizeHelper(5)}px`}
                                color={'black'}
                                fontWeight={'bold'}
                                w={`${sizeHelper(55)}px`}
                                ml={`${sizeHelper(10)}px`}
                            >Daftar Calon Ketua Osis</Text>
                        </View>
                        <Box >
                            <Profilevoot />
                        </Box>


                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default Voot;