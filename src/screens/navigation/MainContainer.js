import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



// Screens
import HomeScreen from './screens/HomeScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import AccountScreen from './screens/AccountScreen';

//Screen names
const homeName = "Home";
const chatbubbleName = "Feedback";
const personName = "Account";

const Tab = createBottomTabNavigator();

function MainContainer () {
  return (
      <Tab.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={({ route }) => ({
          
          
          tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      let rn = route.name;

                      if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-sharp';
                      }else if(rn == chatbubbleName) {
                        iconName = focused? 'chatbubble' : 'chatbubble-ellipses-sharp';
                      }else if (rn === personName) {
                        iconName = focused ? 'person' : 'person-sharp';
                      }

                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={20} color={color} />;
                    },

        })}
        tabBarOptions={{
          activeTintColor: '#488D7C',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 5, fontSize: 10, fontweight:'bold' },
          style: { padding: 10, height: 200}
        }}>

        <Tab.Screen name={'Home'} component={HomeScreen} options={{headerShown:false}} />
        <Tab.Screen name={'Feedback'} component={FeedbackScreen} options={{headerShown:false}} />
        <Tab.Screen name={'Account'} component={AccountScreen} options={{headerShown:false}} />

      </Tab.Navigator>
    
  );
}

export default MainContainer;