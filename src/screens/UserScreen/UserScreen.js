import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
export default function UserScreen() {
  const navigation = useNavigation();

  const [textInput, setTextInput] = useState('');
  const [manager, setManager] = useState({
    username: 'Admin',
    password: 123456,
  });
  const [employee, setEmployee] = useState({
    username: 'Employee',
    password: 12345,
  });
  console.log(typeof manager.password)

  const handleUser = () => {
    if (textInput === '') {
      return null;
    } else if (
      textInput === manager.username ||
      textInput === employee.username
    ) {
      return navigation.navigate('PasswordScreen', {
        manager,
        employee,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topArea}>
        <Text style={styles.page}>1 / 2</Text>
        <View style={styles.shape}>
          <View style={styles.figure1}></View>
          <View style={styles.figure2}></View>
        </View>
      </View>
      <Text style={styles.title}>Gümüş Bayi Giriş</Text>
      <Text style={styles.text}>
        Gümüş Bayi'ye giriş yapmak için lütfen kullanıcı adınızı giriniz
      </Text>
      <Text style={styles.textUserName}>Kullanıcı Adı</Text>
      <View style={styles.inputContainer}>
        <Input
          value={textInput}
          onChangeText={setTextInput}
          placeholder="Kullanıcı Adı"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleUser} text={'ilerle'} />
      </View>
    </SafeAreaView>
  );
}
