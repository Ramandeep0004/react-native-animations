import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from "../components/search";
import { Tabs } from "./bottomsTabs";
import { HeaderComponet } from "./header/Header";



let Stack = createNativeStackNavigator()

export const StackScreens = (props) => {

  return (
    <Stack.Navigator
      initialRouteName="bottomContainer"
      screenOptions={({ route, navigation }) => ({
        presentation: 'modal',
        headerMode: 'screen'
      })}>
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              left="back"
              right='profile'
              title={'Search'}
              navigation={props.navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="bottomContainer"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}