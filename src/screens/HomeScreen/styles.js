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
    
})