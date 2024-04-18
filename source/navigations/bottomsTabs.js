import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icons, IconsType } from "../assets/icons"
import { Icon } from '@rneui/themed'
import { fp, hp } from "../assets/fontsize"
import { colors } from "../assets/colors"
import { HeaderComponet } from "./header/Header"
import { View, StyleSheet } from "react-native"
import { Font } from "../assets/fontfamily"
import { Empty } from "../components/emplty"
import { Home } from "../components/home"
import { Search } from "../components/search"


let Tab = createBottomTabNavigator()
export const Tabs = (props) => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textColor2,
                tabBarLabelStyle: {
                    fontFamily: Font.medium,
                    fontSize: fp(15),
                    marginBottom: hp(5),
                    marginTop : hp(-18)
                },
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: colors.white,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomStartRadius : 0,
                    borderBottomRightRadius : 0,
                    height: 70,
                    borderTopWidth: 0,
                    marginBottom : 0,
                    marginHorizontal :0,
                    borderRadius: 15,
                    shadowColor: 'none',
                    shadowOpacity: 0.9,
                    elevation: 0,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type={IconsType.octIcon}
                            name={Icons.home}
                            color={color}
                            size={hp(24)}
                        />
                    ),
                    headerShown : false
                }}
            />
            <Tab.Screen
                name="Near Me"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type={IconsType.ionIcon}
                            name={Icons.mapOutline}
                            color={color}
                            size={hp(24)}
                        />
                    ),
                    header: ({ navigation, route, options }) => (
                        <HeaderComponet
                            left="back"
                            right='profile'
                            title={'Shopping Cart'}
                            navigation={props.navigation}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Empty}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type={IconsType.entypo}
                            name={Icons.heartOutlined}
                            color={color}
                            size={hp(28)}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Empty}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type={IconsType.feather}
                            name={Icons.user}
                            color={color}
                            size={hp(26)}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    iconMain: {
        height: hp(32),
        width: hp(32),
        backgroundColor: colors.secondPrimary
    },
});