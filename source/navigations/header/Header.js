import React from 'react';
import { View } from 'react-native';
import { Header, Icon } from '@rneui/themed'
import { colors } from '../../assets/colors';
import { Icons, IconsType } from '../../assets/icons';
import { hp } from '../../assets/fontsize';
import { useNavigation } from "@react-navigation/native"
import { styles } from './style';


export const HeaderComponet = (props) => {
  const navigation = useNavigation();

  return (
    <Header
      placement="center"
      containerStyle={styles.container}
      style={styles.header}
      leftComponent={
        props.left === 'back'
          ?
          <View style={styles.iconMian}>
            <Icon
              type={IconsType.ionIcon}
              name={Icons.chevronBack}
              color={colors.black}
              size={hp(25)}
              onPress={() => navigation.goBack()}
            />
          </View>
          :
          null
      }
      centerComponent={{ text: props.title, style: styles.title }}
      rightComponent={
        props.right === 'search'
          ?
          <View style={styles.iconMian}>
            <Icon
              type={IconsType.feather}
              name={Icons.search}
              color={colors.black}
              size={hp(25)}
              onPress={() => navigation.navigate('search')}
            />
          </View>
          :
          props.right === 'profile'
            ?
            <View style={styles.iconMian}>
              <Icon
                type={IconsType.ionIcon}
                name={Icons.mdMenuOutline}
                color={colors.black}
                size={hp(25)}
                onPress={() => navigation.navigate('search')}
              />
            </View>
            :
            props.right === 'heart' ?
              <View style={styles.iconMian}>
                <Icon
                  type={IconsType.antDesign}
                  name={Icons.hearto}
                  color={colors.black}
                  size={hp(25)}
                  onPress={() => navigation.navigate('search')}
                />
              </View>
              :
              null
      }
      statusBarProps={{
        barStyle: 'light-content',
        backgroundColor: colors.black,
        translucent: true
      }}
    />
  );
};


export default Header;