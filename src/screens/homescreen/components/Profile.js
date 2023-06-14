import React from 'react';
// import {View,Text,Image} from 'react-native';
import { Box, Image, Text } from "native-base";
import { sizeHelper } from '../../../Helpers';

export default class Profile extends React.Component {
    state = {
        liked: false
    }
    onLike = () => {
        this.setState({ liked: !this.state.liked })
    }
    render() {

        const { name, profile } = this.props

        return (

            <Box>
                <Box
                    flexDirection={'row'}
                    alignItems={'center'}
                    h={`${sizeHelper(10, 'h')}px`}
                >
                    <Box w={`${sizeHelper(15)}px`}>
                        <Image
                            source={profile}
                            alt="logo-transparent"
                            w={`${sizeHelper(45)}px`}
                            h={`${sizeHelper(45)}px`}
                            resizeMode="contain"
                        // borderRadius={30}
                        />
                    </Box>
                    <Box w={`${sizeHelper(60)}px`}>
                        <Text
                            ml={`${sizeHelper(0)}px`}
                            fontSize={'10'}
                            color={'black'}
                        >{name}</Text>

                    </Box>
                </Box>
            </Box>
        )
    }
}