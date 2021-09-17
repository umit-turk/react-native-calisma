import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input'
import { styles } from './styles';
import { useRoute } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/system/actions';

export default function PasswordScreen() {
    const [admin, setAdmin] = [{
        password: "123456",
    }]
    const routeAdmin = useRoute()
    const routeEmployee = useRoute()
    console.log(routeAdmin.params.manager.password);
    console.log(routeEmployee.params.employee.password);

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [textInput, setTextInput] = useState("");

    const backToUser = () => navigation.goBack()

    const handleLogin = () => {
        if( routeAdmin.params.manager.password == admin.password){
            return dispatch(setUser())
        }
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topArea}>
                <Text style={styles.page}>2 / 2</Text>
                <View style={styles.shape}>
                    <View style={styles.figure2}></View>
                    <View style={styles.figure1}></View>
                </View>
            </View>
            <Text style={styles.title}>Gümüş Bayi Giriş</Text>
            <Text style={styles.text}>Gümüş Bayi'ye giriş yapmak için lütfen kullanıcı adınızı giriniz</Text>
            <Text style={styles.textUserName}>Parola</Text>
            <View style={styles.inputContainer}>
            <Input value={textInput} onChangeText={setTextInput} placeholder="Şifre" />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin} style={styles.goToHome}>
                    <Text style={styles.textLogin}>Giriş yap</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonback}>
                <TouchableOpacity onPress={backToUser} style={styles.goToUser}>
                    <Text style={styles.goBackText}>Geri dön</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

