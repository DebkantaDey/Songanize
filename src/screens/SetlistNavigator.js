import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddSetlist from './AddSetlist/AddSetlist';
import SongList from './SongList/SongList';
import Setlist from './Setlist/Setlist';
import TabNavigation from '../../TabNavigation';

const SetlistNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AddSetlist" component={AddSetlist} options={{ Animation: 'slide_from_bottom' }} />
                <Stack.Screen name="SongList" component={SongList} options={{ Animation: 'slide_from_bottom' }} />
                <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ Animation: 'slide_from_bottom' }} />
            </Stack.Navigator> */}
        </NavigationContainer>
    )
}

export default SetlistNavigator

const styles = StyleSheet.create({})