import React, {useRef, useState} from 'react';
import {View, Text, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../../redux/system/actions';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';
import TeslimatBekleyen from '../Teslimatlar/Teslimatlar';
import ActionSheet from 'react-native-actionsheet';
import Raporlar from '../Raporlar/Raporlar';
import { useNavigation } from '@react-navigation/core';

export default function HomeScreen() {
  const [selected, setSelected] = useState()
  const navigation = useNavigation()
  let actionSheet = useRef();
  const options = [
    "Günlük Rapor",
    "Aylık Rapor" ,
    "Vazgeç"

  ]
  const CANCEL_INDEX = 2
  function goToRapor (){
    
  }
  const handlePress = (buttonIndex) => navigation.navigate("RaporDetayScreen", buttonIndex) 

  const dispatch = useDispatch();
  const manager = useSelector(state => state.system.manager);
  console.log('manager', manager);

  const openRapor = () => {
    actionSheet.current?.show();
  };

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
      <View style={styles.aracveraporalani}>
        <TouchableOpacity  style={styles.araclar}>
          <View style={styles.butonici}>
            <Text style={styles.araclarText}>Tüm Araçlar</Text>
            <Icon style={styles.chevronDown} name="chevron-down" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openRapor} style={styles.raporlar}>
          <View style={styles.raporButonici}>
            <Text style={styles.raporlarText}>Raporlar</Text>
            <Icon style={styles.raporIcon} name="chevron-down" />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Teslimat Bekleyen Siparişler (3)</Text>

      <TeslimatBekleyen />

      <ActionSheet
        ref={actionSheet}
        style = {styles.actionSheet}
        title="Raporlar"
        message="Siparişlerin raporlarını alabiliirsiniz"
        options={options}
        cancelButtonIndex={CANCEL_INDEX}
        tintColor= "green"
        onPress={handlePress}
      />
     

    </SafeAreaView>
  );
}
