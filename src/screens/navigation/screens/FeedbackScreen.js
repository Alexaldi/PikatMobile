import * as React from 'react';
import {View,TouchableOpacity,Text,} from 'react-native';
import {ScrollView, TextInput} from 'react-native';
import { Box,Image,Button } from "native-base";
import { sizeHelper } from '../../../Helpers';

export default function FeedbackScreen ({ navigation }) {
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
                <Image source={require('../../../images/feedback.png')}
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
                 <View style={{flexDirection: 'row', marginHorizontal: 30 }}>
                <TextInput 
                    style={{
                    backgroundColor: '#fff', 
                    marginBottom: 10, 
                    paddingLeft: 20,
                    width: '100%',
                    height: 50,
                    marginTop: 80,
                    flex : 1,
                    elevation: 5
                    }} placeholder="Masukan Pengirim"
                    />
                </View>
                 <View style={{flexDirection: 'row', marginHorizontal: 30, elevation: 5}}>
                <TextInput 
                    style={{
                    backgroundColor: '#fff', 
                    marginBottom: 10, 
                    paddingLeft: 20,
                    marginTop: 20,
                    width:'100%',
                    height: 150,
                    flex : 1,
                    elevation: 5
                    }} placeholder="Pesan....."
                    />
                </View>
                <Box>
                    
                <Button 
                    bg={'#397566'}
                    marginTop={`${sizeHelper(10)}px`}
                    w={`${sizeHelper(35)}px`}
                    h={`${sizeHelper(15)}px`}
                    ml={`${sizeHelper(28)}px`}
                    // style={{
                    // backgroundColor: '#397566', 
                    // paddingVertical: 15, 
                    // marginHorizontal: 120, 
                    // marginTop: 10,
                    // justifyContent: 'center', 
                    // alignItems: 'center', 
                    // elevation: 3,
                    // borderRadius: 10
                    // }}
                    // onPress={() => navigation.navigate('MainContainer')}
                    >
                    <Text style={{fontWeight: 'bold', color: '#FFFFFF', fontSize: 18}}>Send</Text>
                </Button>
                </Box>
    </View>
        </ScrollView>
    );
}
