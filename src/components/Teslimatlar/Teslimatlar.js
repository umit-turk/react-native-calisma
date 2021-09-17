import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

export default function Teslimatlar() {
  const navigation = useNavigation()
  function goToSiparis(){
    navigation.navigate('SiparisScreen');
  }
    return (
        <TouchableOpacity onPress={goToSiparis} style={styles.deliverywithmap}>
        <View style={styles.isimtarih}>
          <Text style={styles.name}>UMİT YASAR TURK</Text>
          <Text style={styles.date}>13 Ocak 2021, 12.00</Text>
        </View>
        <Text style={styles.address}>
          Doğru Sk. ahmet AHMET Apt. No:10 K:10 D:1
        </Text>
        <Text style={styles.amount}>₺12,00 (1 Adet)</Text>
        <View style={styles.bottomInfo}>
        <View style={styles.plaka}>
          <Text style={styles.plakaText}>16 NF 1616</Text>
        </View>
        <View style={styles.bottomAdress}>
            <Text style={styles.bottomAddressText}>yıldırım davutdede</Text>
        </View>
        <View style={styles.bottomMap}>
            <Icon style={styles.bottomMapPin} name="map-pin" />
        </View>
        </View>
      </TouchableOpacity>
    )
}
