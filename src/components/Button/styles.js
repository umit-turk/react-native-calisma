import { StyleSheet } from "react-native";
import { colors, fonts } from '../../constants'
import Fonts from '../../constants/Fonts'

export const styles = StyleSheet.create({
    button: {
        width: 329,
        height: 56,
        backgroundColor: colors.b4FABEA,
        borderRadius: 9,
    },
    buttonText: {
        color: colors.bFFFFFF,
        paddingHorizontal: 142,
        paddingVertical: 14.5,
        lineHeight: 27,
        fontFamily: Fonts.PoppinsMedium,
        fontSize: fonts.H2,

    }
})