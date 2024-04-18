import { colors } from "../../assets/colors";
import { Font } from "../../assets/fontfamily";
import { fp, hp, hzp, vp, wp } from "../../assets/fontsize";

const { StyleSheet } = require("react-native");


export const styles = StyleSheet.create({
    conatainer: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.white
    },
    body: {
        marginHorizontal: hzp(14)
    },
    filtersMain: {
        flexDirection: 'row',
        marginHorizontal: hp(0),
    },
    searchResult: {
        marginVertical: hp(20),
        marginHorizontal: hp(10),
    },
    search: {
        fontFamily: Font.medium,
        fontSize: fp(24),
        color: colors.textColor
    },
    flat: {
        flexGrow: 1,
        paddingBottom: hp(380)
    },
    itemContainer: {
        backgroundColor: colors.white,
        borderRadius: hp(10),
        paddingBottom: hp(10),
        marginHorizontal: hp(10),
        // borderWidth: 1,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        elevation: 2,
        marginBottom: hp(20)
    },
    imageContainer: {
        height: hp(200),
        borderTopLeftRadius: hp(10),
        borderTopRightRadius: hp(10),
        backgroundColor: colors.secondPrimary,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    itemBody: {
        marginHorizontal: hzp(16),
        paddingBottom: hp(10)
    },
    tittleRow: {
        marginTop: hp(20),
        flexDirection: 'row',
        alignItems: 'center'
    },
    tittle: {
        fontFamily: Font.bold,
        fontSize: fp(22),
        color: colors.primary
    },
    locationMian: {
        flexDirection: 'row',
        marginHorizontal: hp(-3),
        marginVertical: hp(10)
    },
    location: {
        marginLeft: hp(5),
        fontFamily: Font.medium,
        fontSize: fp(16),
        color: colors.textColor2
    },
    statusMian: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp(6),
        paddingHorizontal: hp(10),
        borderRadius: hp(20)
    },
    status: {
        fontFamily: Font.medium,
        fontSize: fp(16),
    },
    ratingMain: {
        marginTop: hp(5),
        marginLeft: hp(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    starStyle: {
        marginLeft: hp(-6),
    },
    rating: {
        fontSize: fp(22),
        color: colors.textColor,
        fontFamily: Font.bold,
    },
    reviews: {
        fontSize: fp(16),
        color: colors.textColor3,
        fontFamily: Font.regular,
    },
    detailRow2: {
        marginLeft: hp(3),
        marginTop: hp(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailRow: {
        marginLeft: hp(3),
        marginTop: hp(25),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bath: {
        marginLeft: hp(8),
        fontSize: fp(18),
        color: colors.textColor2,
        fontFamily: Font.regular,
    },
    garage: {
        marginLeft: hp(2),
        fontSize: fp(18),
        color: colors.textColor2,
        fontFamily: Font.regular,
    },
    // iconTv: {
    //     position: 'absolute',
    //     bottom: 0,
    //     right: 100
    // }
    priceRow: {
        flexDirection: 'row',
        marginTop: hp(20),
    },
    price: {
        fontSize: fp(28),
        color: colors.textColor,
        fontFamily: Font.bold,
        letterSpacing: 0.3,
    },
    buttonContainer: {
        marginHorizontal: 0,
        marginLeft: hp(10),
        width: hp(150)
    },
    buttonStyle: {
        borderRadius: wp(5),
        paddingVertical: vp(10),
        paddingHorizontal: hzp(20),
        backgroundColor: colors.primary,
    },
    titleStyle: {
        color: colors.white,
        fontSize: fp(16),
        fontFamily: Font.medium,
        letterSpacing: 0.1,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
    },
    tvMain: {
        paddingLeft: hp(25),
        justifyContent: 'center'
    },
    iconMian: {
        position: 'absolute',
        top: 15,
        right: 20
    },
    nodata: {
        flex: 1,
        marginTop: hp(200),
        justifyContent: 'center',
        alignItems: 'center'
    },
    nodataText: {
        color: colors.black,
        fontSize: fp(22),
        fontFamily: Font.medium,
    }
})