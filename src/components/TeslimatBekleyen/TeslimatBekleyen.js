import React from 'react'
import { View, ScrollView } from 'react-native'
import Teslimatlar from '../Teslimatlar/Teslimatlar';

export default function TeslimatBekleyen() {
    return (
        <View>
            <ScrollView>
            <Teslimatlar />
            <Teslimatlar />
            <Teslimatlar />
            </ScrollView>
        </View>
    )
}
