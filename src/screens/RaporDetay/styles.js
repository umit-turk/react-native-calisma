import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bF1F8FD,
        flex: 1,
    },
    header:{
        height: 56,
        backgroundColor: colors.b4FABEA,
        flexDirection: "row",
    },
    chevronleft: {
        color: "white",
        paddingLeft: 16.43,
        paddingVertical: 18,
        fontSize: fonts.H1,
        paddingRight: 99.57,
    },
    headerText: {
        paddingTop: 15,
        paddingRight: 90.03,
        paddingBottom: 17,
        lineHeight: 24,
        color: "white",
        fontFamily: fonts.PoppinsMedium,
        fontSize: fonts.H3,
        
    },
    logout: {
        paddingVertical: 18,
        paddingRight: 22.97,
        fontSize: fonts.H1,
        color: "white",
    },
    tarihseciniz: {
        height: 56,
        marginHorizontal: 23,
        marginTop: 20,
        backgroundColor: "white",
        marginBottom: 15,
        borderRadius: 9,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        paddingLeft: 16,
        paddingVertical: 18,
        color: colors.b828282,
        fontFamily: fonts.RobotoRegular,
        lineHeight: 18.75,
        fontSize: fonts.H3,
    },
    icon: {
        paddingVertical: 18,
        paddingRight: 15,
        fontSize: fonts.H1,
        color: colors.b828282,
    },
    date:{
        marginLeft: 23,
        marginVertical: 15,
        lineHeight: 27,
        fontSize: fonts.H2,
        fontFamily: fonts.PoppinsMedium,
        color: colors.b828282,
    },
    raporOzet: {
        height: 403,
        marginHorizontal: 23,
        backgroundColor: "white",
        borderRadius: 10,
    },
    damacana:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 12,
        paddingHorizontal: 15,
    },
    damacanaText: {
        fontFamily: fonts.RobotoMedium,
        fontSize: fonts.H3,
        color: colors.b4F4F4F,
        lineHeight: 18.75,
    },
    damacanaUcret: {
        lineHeight: 18.75,
        fontSize: fonts.H3,
        fontFamily: fonts.PoppinsMedium,
        color: colors.b4FABEA,
    },
    damacanaAdet: {
        paddingLeft:15,
        paddingTop: 5,
        fontSize: fonts.H3,
        color: colors.b828282,
        lineHeight: 18.75,
        fontFamily: fonts.RobotoRegular,
    },
    bardak: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    bardakText: {
        fontFamily: fonts.RobotoMedium,
        fontSize: fonts.H3,
        color: colors.b4F4F4F,
        lineHeight: 18.75,
    },
    bardakAmount: {
        lineHeight: 18.75,
        fontSize: fonts.H3,
        fontFamily: fonts.PoppinsMedium,
        color: colors.b4FABEA,
    },
    bardakAdet: {
        paddingLeft:15,
        paddingTop: 5,
        fontSize: fonts.H3,
        color: colors.b828282,
        lineHeight: 18.75,
        fontFamily: fonts.RobotoRegular,
    },
    seperator: {
        borderBottomWidth:2,
        borderBottomColor: colors.bF2F2F2,
        marginTop: 15,
    },
    raporButon: {
        height: 56,
        marginHorizontal: 23,
        marginVertical: 23,
        backgroundColor: colors.b4FABEA,
        borderRadius: 9,
    },
    raporButonText: {
        paddingVertical: 15,
        paddingHorizontal:109 ,
        lineHeight: 27,
        color: "white",
        fontFamily: fonts.PoppinsMedium,
        fontSize: fonts.H2,
    },
    




})