import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, NativeBaseConfigProvider, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { theme } from './theme';
// navigation
import Splashscreen1 from './src/screens/splashscreen1/Splashscreen1';
import Splashscreen2 from './src/screens/splashscreen2/Splashscreen2';
import Splashscreen3 from './src/screens/splashscreen3/Splashscreen3';
import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';
import MainContainer from './src/screens/navigation/MainContainer';
import Pembinaan from './src/screens/detailsfitur/Pembinaan';
import Seragam from './src/screens/detailsfitur/Seragam';
import Voot from './src/screens/detailsfitur/Voot';
import Pguru from './src/screens/detailsfitur/Pguru';
import Rapot from './src/screens/detailsfitur/Rapot';
import Eskul from './src/screens/detailsfitur/Eskul';
import Detailprofile from './src/screens/detailsfitur/Voot/Detailprofile';
import Modalvoot from './src/screens/detailsfitur/Voot/Modalvoot';
import { AppProvider } from './src/store';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <AppProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splashscreen1" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splashscreen1" component={Splashscreen1} />
            <Stack.Screen name="Splashscreen2" component={Splashscreen2} />
            <Stack.Screen name="Splashscreen3" component={Splashscreen3} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="MainContainer" component={MainContainer} />
            {/* <Stack.Screen name="Pembinaan" component={Pembinaan} />
            <Stack.Screen name="Seragam" component={Seragam} />
            <Stack.Screen name="Pguru" component={Pguru} />
            <Stack.Screen name="Rapot" component={Rapot} />
            <Stack.Screen name="Eskul" component={Eskul} /> */}
            <Stack.Screen name="Voot" component={Voot} />
            <Stack.Screen name="Detailprofile" component={Detailprofile} />
            <Stack.Screen name="Modalvoot" component={Modalvoot} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </AppProvider>
  )
}



export default App;
