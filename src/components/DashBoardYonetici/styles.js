import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bF1F8FD,
    },
    header:{
        flexDirection: "row"
    },
    iconSize: {
        marginVertical:20,
        marginLeft: 23,
        marginRight:10,
        width: 36,
        height: 36,
        backgroundColor: colors.bF1F8FD,
        borderRadius: 18.5,
    },
    icon:{
        color: colors.b4FABEA,
        fontSize: fonts.H1,
        padding: 8
    },
    headerText: {
        marginVertical: 26,
        marginLeft: 10,
        marginRight: 70,
        lineHeight: 24,
        fontSize: fonts.H3,
        fontFamily: fonts.PoppinsMedium,
    },
    logoutArea: {
        marginTop: 20,
        marginRight: 24,
        width: 60,
        height: 36,
        backgroundColor: colors.bF1F8FD,
        borderRadius: 18.21,
    },
    logoutIcon: {
        fontSize: fonts.H1,
        marginVertical: 8,
        marginHorizontal: 20,
        color: colors.b4FABEA
    },
    text: {
        fontSize: fonts.H2,
        lineHeight: 27,
        fontFamily: fonts.PoppinsMedium,
        marginLeft: 25,
        marginRight: 64,
        color: colors.b4F4F4F,
    },
    aracveraporalani: {
        flexDirection: "row",
    },
    araclar: {
        width: 159,
        height: 56,
        backgroundColor: 'white',
        borderRadius: 9,
        marginLeft: 24,
        marginRight: 13,
        marginBottom: 15,
    },
    butonici: {
        flexDirection: "row",
    },
    araclarText: {
        paddingLeft: 15,
        paddingVertical: 16,
        paddingRight: 11,
        lineHeight: 24,
        fontFamily: fonts.PoppinsMedium,
        color: colors.b4FABEA,
        fontSize: fonts.H3
    },
    chevronDown: {
        paddingTop: 19,
        paddingRight: 13,
        paddingBottom: 17,
        fontSize: fonts.H1,
        color: colors.b4FABEA,
    },
    raporlar: {
        width: 158,
        height: 56,
        backgroundColor: "white",
        borderRadius: 9,
    },
    raporButonici: {
        flexDirection: "row",
    },
    raporlarText: {
        paddingLeft: 15,
        paddingVertical: 16,
        paddingRight: 40,
        color: colors.b6FCF97,
        lineHeight: 24,
        fontFamily: fonts.PoppinsMedium,
        fontSize: fonts.H3,
    },
    raporIcon: {
        paddingTop: 19,
        paddingRight: 13,
        paddingBottom: 17,
        fontSize: fonts.H1,
        color: colors.b6FCF97,
    },
   
})