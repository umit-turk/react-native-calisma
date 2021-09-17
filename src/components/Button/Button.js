import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, style} from 'react-native';
import {styles} from './styles';

export default function Button({text, onPress, color}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
