import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../constants';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';

export default function TeslimatButton({text, onPress, visible, onfocus }) {

   
    return (
        <TouchableOpacity
        style={[styles.teslimEdildi, {borderColor: onfocus ? colors.b4FABEA : "white"}]}
        onPress={onPress}>
          <Text style={styles.teslimedilditext}>{text}</Text>
          <View style={[styles.iconField, {backgroundColor: visible ? colors.b4FABEA : colors.bF2F2F2}]}>
        <Icon
          name="check"
          style={[styles.icon, {color : visible ? "white" : "gray"}]}
        />
        </View>
      </TouchableOpacity>
    )
}
