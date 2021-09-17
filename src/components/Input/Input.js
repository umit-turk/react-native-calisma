import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { styles } from './styles'


export default function Input({placeholder, style, value, onChangeText}) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={value} onChangeText={onChangeText}  placeholder={placeholder} />
        </View>
    )
}


