import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import {styles} from './styles';
import  Icon  from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/system/actions';
export default function RaporDetay() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    function goBack(){
        navigation.goBack();
    }
    function userLeave(){
        dispatch(userLogout());
    }
    return (
        <SafeAreaView style={styles.container}>
             <View style={styles.header}>
                <Icon onPress={goBack} style={styles.chevronleft} name={"chevron-left"} />
                <Text style={styles.headerText}>Günlük Rapor</Text>
                <Icon onPress={userLeave} style={styles.logout} name="log-out"  />
            </View>
            <TouchableOpacity style={styles.tarihseciniz}>
                <Text style={styles.text}>Lütfen Tarih Seçiniz</Text>
                <Icon style={styles.icon} name="chevron-down" />
            </TouchableOpacity>
            <Text style={styles.date}>24 Haziran 2021, 11:59</Text>
            <View style={styles.raporOzet}>
                <View style={styles.damacana}>
                    <Text style={styles.damacanaText}>19L Damacana</Text>
                    <Text style={styles.damacanaUcret}>₺11,00</Text>
                </View>
                <Text style={styles.damacanaAdet}>1 Adet</Text>
                <View style={styles.bardak}>
                    <Text style={styles.bardakText}>200ML Bardak (60 Adet)</Text>
                    <Text style={styles.bardakAmount}>₺25,00</Text>
                </View>
                <Text style={styles.bardakAdet}>2 Adet</Text>
                <View style={styles.bardak}>
                    <Text style={styles.bardakText}>5,25L Pet Şişe (4 Adet)</Text>
                    <Text style={styles.bardakAmount}>₺35,00</Text>
                </View>
                <Text style={styles.bardakAdet}>10 Adet</Text>
            <View style={styles.seperator}></View>


            <View style={styles.bardak}>
                    <Text style={styles.bardakText}>Toplam Ürün</Text>
                    <Text style={styles.bardakAmount}>8 Adet</Text>
                </View>
                <View style={styles.bardak}>
                    <Text style={styles.bardakText}>Toplam Teslimat</Text>
                    <Text style={styles.bardakAmount}>8 Adet</Text>
                </View>
                <View style={styles.bardak}>
                    <Text style={styles.bardakText}>Toplam İndirim Tutarı</Text>
                    <Text style={styles.bardakAmount}>₺30,00</Text>
                </View>
                <View style={styles.bardak}>
                    <Text style={styles.bardakText}>Toplam Depozito Tutarı</Text>
                    <Text style={styles.bardakAmount}>₺60,00</Text>
                </View>
                <View style={styles.seperator}></View>
                <View style={styles.bardak}>
                    <Text style={styles.bardakText}>Toplam Tutar</Text>
                    <Text style={styles.bardakAmount}>₺150,00</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.raporButon}>
                    <Text style={styles.raporButonText}>Raporu İndir</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}
