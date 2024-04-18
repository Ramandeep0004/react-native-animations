import { Dimensions } from 'react-native';
import { hp } from './fontsize';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Dimension = {
    windowWidth: width,
    width: '100%',
    height: '100%',
    large: hp(25),
    semiLarge: hp(27),
    Large: hp(30),
    Large1: hp(34),
    semilarge: hp(22),
    verysmall: hp(18),
    smallicon: hp(20),
    Vsmall: hp(15),
    docicon: hp(16),
    big: hp(42),
    Big: hp(60),
    small: hp(12),
    medium: hp(16),
    Medium: hp(18),

    start: {
        x: 0,
        y: 0,
    },
    end: {
        x: 1,
        y: 0,
    },
};
