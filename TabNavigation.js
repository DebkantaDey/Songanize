import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Songanize from './src/screens/Songanize/Songanize';
import Groups from './src/screens/Groups/Groups';
import Profile from './src/screens/Profile/Profile';
import Setlist from './src/screens/Setlist/Setlist';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import Help from './src/screens/Help/Help';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HelpIcon from './src/images/help_icon.png'
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';


//const Tab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
const TabNavigation = () => {

  const navigationStyles = {
    tabBarStyle: {
      backgroundColor: 'black',
      height: 200,
    }
  }

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: '#c4461c',
        inactiveBackgroundColor: '#b55031',
        style: {
          backgroundColor: '#000',
          height: 80,
        }
      }}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 'auto' },
      }}
    >
      <Tab.Screen name="Songanize" component={Songanize} options={{
        headerShown: false,
        screen: Songanize,
        navigationOptions: {
          tabBarLabel: "Songanize",
          tabBarOptions: {
            activeTintColor: "#006600",
          },
          tabBarIcon: (tabInfo) => {

          },
        },
      }} />
      <Tab.Screen name="Setlist" component={Setlist} options={{ headerShown: false }} />
      <Tab.Screen name="Groups" component={Groups} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      {/* <Tab.Screen name="Help" component={Help} options={{
        showLabel: false,
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 50, height: 50 }}
            source={Help}
          />
        )
      }} /> */}
      <Tab.Screen name="Help" component={Help} 
      screenOptions={{headerLeft: () => <HelpIcon></HelpIcon>}}
      />
    </Tab.Navigator>
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="Settings" component={SettingsScreen} />
    // </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
  tabNavigatorStyle: {
    height: 20,
    backgroundColor: 'black'
  },
  helpIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    margin: 'auto',
    flexDirection: 'row'
  }
})

// import { View, Text, TouchableOpacity } from 'react-native';

// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name, route.params);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//             <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// ...

{/* <Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator> */}