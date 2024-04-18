import {StyleSheet} from 'react-native'
import { colors } from '../../assets/colors'
import { fp, hp, hzp } from '../../assets/fontsize'
import { Font } from '../../assets/fontfamily'

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.white,
        paddingLeft: hzp(22),
        marginTop: hp(25)
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.white,
        marginVertical: hp(20),
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0,
        borderColor: colors.textColor,
        backgroundColor: colors.primary,
    },
    title: {
        fontSize: fp(34),
        paddingTop: hp(10),
        color: colors.black,
        fontFamily: Font.bold,
        letterSpacing: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'capitalize'
    },
    title2: {
        fontSize: fp(16),
        paddingTop: hp(10),
        color: colors.textColor3,
        fontFamily: Font.medium,
    },
    iconMian: {
        marginHorizontal: hp(20),
        flexDirection: 'row',
        marginTop: hp(28),
    },
    icon1Style: {
    },
    flat2: {
        flexGrow: 1,
        paddingRight: hp(10)
    },
    imageContainer: {
        marginVertical: hp(20),
        position: 'relative',
        marginRight: hp(20)
    },
    imageMain: {
        height: hp(320),
        borderRadius: hp(5),
        width: hp(400),
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    detailConatiner: {
        zIndex: 3,
        marginTop: hp(-140),
        marginLeft: hp(20),
        marginRight: hp(50),
        backgroundColor: colors.white,
        paddingHorizontal: hp(20),
        paddingVertical: hp(25),
        borderRadius: hp(5),
        shadowColor: 'black',
        shadowOpacity: 0.9,
        elevation: 0,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: fp(34),
        color: colors.textColor,
        fontFamily: Font.bold,
        letterSpacing: 0.3,
    },
    teleIconMian: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(46),
        width: hp(48),
        borderRadius: hp(8),
        backgroundColor: '#f85757'
    },
    tittleMain: {
        marginVertical: hp(8)
    },
    tittle: {
        fontSize: fp(20),
        color: colors.primary,
        fontFamily: Font.bold,
        // letterSpacing: 0.3,
    },
    locationMain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(4)
    },
    loction: {
        fontSize: fp(16),
        color: colors.textColor2,
        fontFamily: Font.medium,
    },
    ratingMain: {
        marginLeft: hp(5),
        marginVertical: hp(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    starStyle: {
        marginLeft: hp(-10),
    },
    rating: {
        fontSize: fp(22),
        color: colors.textColor,
        fontFamily: Font.medium,
    },
    reviews: {
        fontSize: fp(16),
        color: colors.textColor3,
        fontFamily: Font.regular,
    },
    dotsMain: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dots: {
        marginRight: hp(4),
        height: hp(10),
        width: hp(10),
        borderRadius: hp(6),
        backgroundColor: colors.primary
    },
    dots2: {
        marginRight: hp(7),
        height: hp(6),
        width: hp(6),
        borderRadius: hp(3),
        backgroundColor: colors.textColor4,
        borderWidth: 1,
        borderColor: colors.textColor4
    },
    topplaceConatiner: {
        marginTop: hp(25)
    },
    TopPlacesMian: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: hzp(20),
    },
    topPlaces: {
        fontSize: fp(22),
        color: colors.textColor,
        fontFamily: Font.bold,
        letterSpacing: 0.2
    },
    seeAll: {
        marginTop: hp(8),
        fontSize: fp(16),
        color: colors.primary,
        fontFamily: Font.medium,
    },
    main: {
        marginBottom: hp(20)
    },
    flat: {
        flexGrow: 1,
        paddingRight: hp(16)
    },
    itemContainer: {
        marginRight: hp(10),
        marginVertical: hp(20),
        width: hp(180),
        height: hp(180),
        // backgroundColor : colors.primary
    },
    imageMian: {
        width: hp(180),
        height: hp(120),
        borderRadius: hp(5),
        overflow: 'hidden'
    },
    properityName: {
        marginHorizontal: hzp(10)
    },
    name: {
        marginTop: hp(8),
        fontSize: fp(16),
        color: colors.black,
        fontFamily: Font.medium,
    },
    totalProperitis: {
        fontSize: fp(14),
        color: colors.textColor3,
        fontFamily: Font.medium,
    }
})