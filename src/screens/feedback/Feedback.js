// import React from 'react';
// import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
// import {ScrollView} from 'react-native';
// import MainContainer from './components/MainContainer';


// export default class Feedback extends React.Component{
//     state={
//         popularSelected:true
//     }
//     onTabPressed=()=>{
//         this.setState({popularSelected:!this.state.popularSelected})
//     }
//     render(){
//         return(
//             <View>
//           <ScrollView
//             showsVerticalScrollIndicator={false}
//             style={{
//                 height:"100%",
//                 backgroundColor:"#488D7C"
//             }}
//           >
//               <View style={{
//                   height:260,
//                   width:"100%",
//                   paddingHorizontal:25
//               }}>
//                   <View style={{
//                       flexDirection:"row",
//                       width:"100%",
//                       paddingTop:10,
//                       alignItems:"center"
//                   }}>
//                       <View style={{
//                           marginRight: 10
//                       }}>
//                           <Image source={require('../../images/feedback.png')}/>
//                       </View>
              
//                   </View>
//               </View>

//               <View style={{
//                   backgroundColor:"#FFFFFF",
//                   borderTopLeftRadius:30,
//                   borderTopRightRadius:30,
//                   height:2250,
//                   paddingHorizontal:20,
//                   marginTop:70
//               }}>               
//               </View>
//           </ScrollView>
//           <MainContainer/>
//           </View>
//         )
//     }
// }