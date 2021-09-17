import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screens/UserScreen/UserScreen';
import PasswordScreen from '../screens/PasswordScreen/PasswordScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {useSelector} from 'react-redux';
import SiparisScreen from '../screens/SiparisScreen/SiparisScreen';
import TeslimatTuru from '../screens/TeslimatTuru/TeslimatTuru';
import RaporDetay from '../screens/RaporDetay/RaporDetay';
import SiparisTeslimEdildi from '../screens/SiparisTeslimEdildi/SiparisTeslimEdildi';
import SiparisTeslimEdilemedi from '../screens/SiparisTeslimEdilemedi/SiparisTeslimEdilemedi';

const Stack = createStackNavigator();

const userStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const MainPage = () => {
  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="home" component={HomeScreen} />
    <Stack.Screen name="SiparisScreen" component={SiparisScreen} />
    <Stack.Screen name="TeslimatTuru" component={TeslimatTuru} />
    <Stack.Screen name="RaporDetayScreen" component={RaporDetay} />
    <Stack.Screen name="SiparisTeslimScreen" component={SiparisTeslimEdildi} />
    <Stack.Screen name="SiparisTeslimEdilemediScreen" component={SiparisTeslimEdilemedi} />
  </Stack.Navigator>
  )
}

export default function RootNavigation() {
  const isLogin = useSelector(state => state.system.isLogin);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLogin === false ? (
        <Stack.Screen name="User" component={userStack} />
      ) : (
        <Stack.Screen name="HomeScreen" component={MainPage} />
      )}
    </Stack.Navigator>
  );
}
