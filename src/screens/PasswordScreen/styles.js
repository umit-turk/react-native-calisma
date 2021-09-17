import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants";

export const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "white"},
    topArea: {flexDirection: "row"},
    page: {
        marginTop: 23,
        marginRight: 246.17,
        marginTop: 27,
        marginLeft: 22.93,
        fontFamily: fonts.PoppinsMedium,
        fontSize: fonts.H2,
        color: colors.b4FABEA,
        lineHeight: 27,
    },
    shape: {
        marginTop: 32,
        marginRight: 23,
        flexDirection: "row"
    },
    figure1: {
        backgroundColor: colors.b4FABEA,
        width: 27.16,
        height: 9.74,
        borderRadius: 10,
        marginRight: 23,
    },
    figure2: {
        width: 9.74,
        height: 9.74,
        backgroundColor: colors.b4FABEA,
        borderRadius: 10,
        marginRight: 10,

    },
    title: {
        marginTop: 27,
        marginLeft: 22.93,
        fontSize: fonts.H1,
        color: colors.b4F4F4F,
        fontFamily: fonts.PoppinsMedium,
        lineHeight: 30,
    },
    text: {
        marginLeft: 22.11,
        marginTop: 17,
        marginRight: 47.89,
        fontFamily: fonts.PoppinsRegular,
        fontSize: fonts.H3,
        color: colors.b828282,
        lineHeight: 24,
        fontStyle: "normal"
    },
    textUserName: {
        marginLeft: 23,
        marginTop: 30,
        fontFamily: fonts.PoppinsMedium,
        fontSize: fonts.H3,
        lineHeight: 24,
        color: colors.b4F4F4F,
    },
    inputContainer: {
        marginTop: 10,
        marginLeft: 23
    },
    buttonContainer: {
        marginTop: 20.2,
        marginHorizontal: 23,
    },
    buttonback: {
        marginTop: 20,
        marginLeft: 22.86,
        marginRight: 23.14,
    },
    goToHome: {
        width: 329,
        height: 56,
        backgroundColor: colors.b4FABEA,
        borderRadius: 9,
    },
    textLogin:{
        color: colors.bFFFFFF,
        fontFamily: fonts.PoppinsMedium,
        fontSize: fonts.H2,
        lineHeight: 27,
        paddingVertical: 14.5,
        paddingHorizontal: 124.5
    },
    goToUser: {
        backgroundColor: colors.bF1F8FD,
        width: 329,
        height: 56,
        borderRadius: 9,
    },
    goBackText: {
        color: colors.b4FABEA,
        lineHeight: 27,
        fontSize: fonts.H2,
        fontFamily: fonts.PoppinsMedium,
        paddingHorizontal: 125.53,
        paddingVertical: 14.5,
    }
})