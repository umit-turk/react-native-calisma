import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import  Icon  from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/core';
import { userLogout } from '../../redux/system/actions';


export default function SiparisScreen() {
    
    const dispatch = useDispatch();
    const navigation = useNavigation();

    function goBack(){
        navigation.goBack();
    }
    function userLeave(){
        dispatch(userLogout());
    }
    function TeslimatDurumuGit(){
        navigation.navigate("TeslimatTuru")
    }
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Icon onPress={goBack} style={styles.chevronleft} name={"chevron-left"} />
                <Text style={styles.headerText}>Sipariş Detay</Text>
                <Icon onPress={userLeave} style={styles.logout} name="log-out"  />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <Text style={styles.date}>13 Ocak 2021, 12.00</Text>
            <View style={styles.summary}>
                <View style={styles.damacana}>
                    <Text style={styles.damacanaText}>19 L Damacana</Text>
                    <Text style={styles.damacanaAmount}>1 Adet</Text>
                </View>
                <View style={styles.bardak}>
                    <Text style={styles.bardakText}>200ML Bardak (60) Adet</Text>
                    <Text style={styles.bardakAmount}>2 Adet</Text>
                </View>
                <View style={styles.pet}>
                    <Text style={styles.petText}>5,25 L Pet Şişe (4) Adet</Text>
                    <Text style={styles.petAmount}>2 Adet</Text>
                </View>
                <View style={styles.seperator}></View>
                <View style={styles.toplamUrun}>
                    <Text style={styles.urunText}>Toplam Ürün</Text>
                    <Text style={styles.urunAmount}>5 Adet</Text>
                </View>
                <View style={styles.toplamDepozito}>
                    <Text style={styles.depozitoText}>Toplam Depozito Tutarı</Text>
                    <Text style={styles.depozitoAmount}>₺27,00</Text>
                </View>
                <View style={styles.seperator}></View>
                <View style={styles.odenecekTutar}>
                    <Text style={styles.odenecekText}>Ödenecek Tutar</Text>
                    <Text style={styles.odenecekAmount}>₺64,00</Text>
                </View>
            </View>
            <View style={styles.kullanıcı}>
                <Text style={styles.kullanıcıText}>Kullanıcı Bilgileri</Text>
                <TouchableOpacity style={styles.mobilebutton}>
                    <View style={styles.telici}>
                    <Icon style={styles.icon} name="phone" />
                    <Text style={styles.aratext}>Ara</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.musteriadi}>
            <Text style={styles.musteriText}>Umit Yasar Turk</Text>
            </View>
            <View style={styles.address}>
                <Text style={styles.addressText}>Teslimat Adresi</Text>
                <TouchableOpacity style={styles.addressButton}>
                    <View style={styles.adresici}>
                    <Icon style={styles.addressIcon} name="map-pin"/>
                    <Text style={styles.konumText}>Konum</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.adresAlani}>
                <Text  style={styles.addressContent}>Ahmet Altun Apt. No:10 K:1 D:3 Ahmet Mh. Doğru Sk. Yıldırım/Bursa</Text>
                <Text style={styles.yoltarif}>Yol Tarifi</Text>
                <Text style={styles.tarifOzet}>Arasından girip sağ tarafa dönülecek.</Text>
            </View>
            <View style={styles.siparisAlan}>
                <Text style={styles.siparis}>Sipariş Notu</Text>
                <View style={styles.alertCircle}>
                    <Icon style={styles.alerticon} name="alert-circle" />
                </View>
            </View>
            <View style={styles.not}>
                <Text style={styles.siparisText}>Hızlı teslim ederseniz memnun olurum.</Text>
            </View>
            <Text style={styles.teslimat}>Teslimat Türü</Text>
            <View style={styles.teslimatTürü}>
                <Text style={styles.teslimatTürüText}>Hemen (120 dk)</Text>
            </View>
            <TouchableOpacity onPress={TeslimatDurumuGit} style={styles.teslimEtButton}>
                <Text style={styles.teslimEtText}>Teslim Et</Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
