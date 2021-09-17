import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableHighlightBase,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {userLogout} from '../../redux/system/actions';
import { colors } from '../../constants';
import TeslimatButton from '../../components/TeslimatButton/TeslimatButton';
export default function TeslimatTuru() {

  const [goster, setGoster] = useState(false)
  const [visible, setVisible] = useState(false);

  const teslimatDurumu = [
    {
      id:1,
      type: "Teslim Edildi",
    },
    {
      id:2,
      type: "Teslim Edilemedi",
    },
  ]
  const teslimatHata = [
    {
      id:3,
      type: "yanlış adres"
    },
    {
      id: 4,
      type: "evde yok"
    },
    {
      id: 5,
      type: "kar yağışı"
    }
  ]

  const navigation = useNavigation();
  const dispatch = useDispatch();

  function userLeave() {
    dispatch(userLogout());
  }

  function goBack() {
    navigation.goBack();
  }

  function show(){
    setGoster(!goster);
    setVisible(!visible);
  }



  const [hata, setHata] = useState(0)
  const [idler, setIdeler] = useState(1)
  const [hatayazısı, setHatayazısı] = useState("")

  function idTut(id){
    setIdeler(id) 
    setHata(0)
    setHatayazısı("")
  }

  function hataTut(id){
    setHata(id)
    setHatayazısı("")
  }
  console.log("hata tut",hata)

  console.log("idler", idler);
  

  function kaydet(){
    if(idler === 1){
        navigation.navigate("SiparisTeslimScreen"); 
    }
    if(idler === 2 && !hata){
        setHatayazısı('hata') 
        
    }if(idler === 2 && hata) {
      navigation.navigate("SiparisTeslimEdilemediScreen")
    }
    
  }
 
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Icon
          onPress={goBack}
          style={styles.chevronleft}
          name={'chevron-left'}
        />
        <Text style={styles.headerText}>Sipariş Detay</Text>
        <Icon onPress={userLeave} style={styles.logout} name="log-out" />
      </View>
      <Text style={styles.text}>Teslimat Durumu</Text>
      <View>
        {
          teslimatDurumu.map(item => (
            <TouchableOpacity onPress={() => idTut(item.id)}><Text>{item.type}</Text></TouchableOpacity>
          ))
        }
        <View>
        {
          idler === 2 && teslimatHata.map(item => (
            <TouchableOpacity onPress={() => hataTut(item.id)} ><Text>{item.type}</Text></TouchableOpacity>
          ))        
        }
        <Text>{hatayazısı}</Text>
        </View>
        <TouchableOpacity onPress={kaydet} ><Text>kaydet</Text></TouchableOpacity>
        
          
        
         

       
      </View>
     
    {/* <TeslimatButton text="Teslim Edildi" onfocus={visible}  onPress={() => console.log("teslim edildi")} />

    <TeslimatButton  text="Teslim Edilemedi" visible={visible}  onPress={show} />

    <View style={{display: goster ? "flex" : 'none' }}>
    <Text style={styles.text}>Teslim Edilememe Nedini</Text>
    <TeslimatButton text="Evde yok" visible={!visible} onPress={() => console.log("object")}  />
    <TeslimatButton text="Yanlış Adres" visible={visible}  />
    <TeslimatButton text="Kar Yağışı" visible={!visible}  />
    </View> */}
    </SafeAreaView>
  );
}
