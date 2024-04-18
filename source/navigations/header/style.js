import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { fp, hp, vp } from "../../assets/fontsize";
import { Font } from "../../assets/fontfamily";


export const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0,
        backgroundColor: colors.white,
        paddingBottom: hp(22),
        paddingTop: hp(30),
        paddingHorizontal: vp(10),
        alignItems: 'center'
    },
    header: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cfcfcf',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#222222'
    },
    title: {
        fontSize: fp(24),
        color: colors.textColor,
        fontFamily: Font.medium,
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'capitalize'
    },
    iconMian: {
        backgroundColor: colors.white,
        paddingVertical: hp(5),
        paddingHorizontal: hp(15),
        // width: '%',
        borderRadius: 10,
    },
    icon: {
        height: hp(50),
        width: hp(50),
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    mainimage: {
        height: hp(54),
        width: hp(54),
        borderRadius: hp(27),
        overflow: 'hidden',
    },
});