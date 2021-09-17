import { colors } from '../../constants'
import Fonts from '../../constants/Fonts'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: 329,
        height: 56,
        borderWidth: 2,
        borderColor: colors.bF2F2F2,
        borderRadius: 10,
    },
    input: {
        paddingLeft:15,
        paddingTop: 19,
        paddingBottom:18,
        lineHeight: 18.75,
        color: colors.b828282,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Fonts.H3,
    }
})