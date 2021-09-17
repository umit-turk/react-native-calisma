import React from 'react';
import {View, Text, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../../redux/system/actions';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';
import TeslimatBekleyen from '../TeslimatBekleyen/TeslimatBekleyen';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const manager = useSelector(state => state.system.manager);
  console.log('manager', manager);

  function userLeave() {
    dispatch(userLogout());
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconSize}>
          <Icon style={styles.icon} name="map-pin" />
        </View>
        <Text style={styles.headerText}>B-Gemlik Yönetim</Text>
        <TouchableOpacity onPress={userLeave} style={styles.logoutArea}>
          <Icon style={styles.logoutIcon} name="log-out" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Teslimat Bekleyen Siparişler (3)</Text>
      <TeslimatBekleyen />
    </SafeAreaView>
  );
}
