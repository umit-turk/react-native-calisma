import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants";

export const styles = StyleSheet.create({
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
    text: {
        marginLeft: 25,
        marginTop: 20,
        fontSize: fonts.H2,
        fontFamily: fonts.PoppinsMedium,
        lineHeight: 27,
        color: colors.b4F4F4F,
        marginBottom: 15,
    },
    
})