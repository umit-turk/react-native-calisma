import { StyleSheet } from "react-native";
import { colors, fonts } from '../../constants';
export const styles = StyleSheet.create({
    teslimEdildi: {
        height: 56,
        marginHorizontal: 23,
        backgroundColor: "white",
        borderRadius: 9,
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 2,
        marginBottom: 15,
    },
    teslimedilditext: {
        fontSize: fonts.H3,
        paddingLeft: 15,
        paddingVertical: 18,
        lineHeight: 18.75,
        fontFamily: fonts.RobotoRegular,
        color: colors.b828282,
    },
    iconField: {
        width: 23,
        height: 23,
        marginRight: 15,
        marginTop:17,
        backgroundColor: colors.bF2F2F2,
        borderRadius: 19.15,
    },
    icon: {
       
        width: 23,
        padding: 5
    }
})