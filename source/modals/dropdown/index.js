import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from '../../assets/colors';
import { Font } from '../../assets/fontfamily';
import { fp, hp } from '../../assets/fontsize';


const DropdownComponent = (props) => {
    const [value, setValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);

    const handeChange = (item) => {
        setValue(item.value)
        props.onChange(item)
    };

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: colors.primary }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                containerStyle={styles.containerStyle}
                itemContainerStyle={styles.itemContainerStyle}
                itemTextStyle={styles.itemTextStyle}
                iconStyle={styles.iconStyle}
                iconColor={colors.primary}
                data={props && props.data ? props.data : ''}
                search
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={!isFocus && props && props.placeholder ? props.placeholder : 'select'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                accessibilityLabel={'value'}
                onChange={item => {
                    handeChange(item),
                        setIsFocus(false);
                }}
            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: hp(5),
    },
    dropdown: {
        height: 50,
        borderColor: colors.textColor,
        borderWidth: 0.1,
        borderRadius: hp(2),
        paddingHorizontal: hp(4),
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 10,
    },
    placeholderStyle: {
        paddingHorizontal: hp(4),
        fontSize: fp(15),
        fontFamily: Font.regular,
        color: colors.textColor
    },
    selectedTextStyle: {
        paddingHorizontal: hp(4),
        fontSize: fp(16),
        fontFamily: Font.medium,
        color: colors.textColor
    },
    iconStyle: {
        width: 14,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: fp(15)
    },
    containerStyle: {
        borderBottomLeftRadius: hp(10),
        borderBottomRightRadius: hp(10)
    },
    itemContainerStyle: {
        marginVertical: hp(-10)
    },
    itemTextStyle: {
        fontSize: fp(16),
        fontFamily: Font.medium,
    }
});