import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/LoginScreens/LoginScreens';
import Registration from './src/screens/Registration/Registration';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword/ResetPassword';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import AddSetlist from './src/screens/AddSetlist/AddSetlist';
import SongList from './src/screens/SongList/SongList';

const App = () => {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} options={{ Animation: 'slide_from_bottom' }} />
        <Stack.Screen name="Registration" component={Registration} options={{ Animation: 'slide_from_bottom' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ Animation: 'slide_from_bottom' }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ Animation: 'slide_from_bottom' }} />
        <Stack.Screen name="Tab" component={TabNavigation} options={{Animation: 'slide_from_bottom'}}/>
        <Stack.Screen name="AddSetlist" component={AddSetlist} options={{Animation: 'slide_from_bottom'}}/>
        <Stack.Screen name="SongList" component={SongList} options={{Animation: 'slide_from_bottom'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})