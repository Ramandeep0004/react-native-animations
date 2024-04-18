import { StatusBar, StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { colors } from '../../assets/colors';
import { Font } from '../../assets/fontfamily';
import { fp } from '../../assets/fontsize';
import { useIsFocused } from '@react-navigation/native';


export const Empty = () => {
    return (
        <View style={styles.conatainer}>
             {
                useIsFocused() ?
                    <StatusBar
                        translucent={true}
                        backgroundColor={colors.primary}
                    />
                    :
                    null
            }
            <Text style={styles.emptyText}>No screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    emptyText  : {
        fontFamily : Font.medium,
        fontSize : fp(22),
        color : colors.black
    }
})