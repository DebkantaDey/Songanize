import { StyleSheet, Text, ScrollView, TouchableOpacity, View, Button } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import { useNavigation } from '@react-navigation/native';
//import Sound from 'react-native-sound';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddSetlist from '../AddSetlist/AddSetlist';
import SongList from '../SongList/SongList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Setlist = () => {

  const Stack = createNativeStackNavigator()
  //const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.fullScreen}>
        <View style={styles.textView}>
          <Text style={styles.textHeading}>Setlist</Text>
        </View>
        {/* <TouchableOpacity style={styles.button} onPress={navigation.navigate('AddSetlist')}>
        <Text style={styles.buttonText}>Add new Setlist</Text>
      </TouchableOpacity> */}
        <View style={styles.button}>
          <Button
            title="Add new Setlist"
            onPress={() => navigation.navigate('AddSetlist')}
            style={styles.buttonText}
            color="#FE6518"
          />
        </View>
        <View>
          <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title >Event</DataTable.Title>
              <DataTable.Title style={styles.tableHeader}>Group</DataTable.Title>
              <DataTable.Title style={styles.tableHeader}>Date</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>Irish Pup Dashiram</DataTable.Cell>
              <DataTable.Cell>Brand</DataTable.Cell>
              <DataTable.Cell>18/7/1980</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Song</DataTable.Cell>
              <DataTable.Cell>Just you and I</DataTable.Cell>
              <DataTable.Cell>28/1/8808</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Events</DataTable.Cell>
              <DataTable.Cell></DataTable.Cell>
              <DataTable.Cell>56/89/6780</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </ScrollView>

    </>
  )
}

export default Setlist

const styles = StyleSheet.create({
  fullScreen: {
    height: '100%',
    width: '100%'
  },
  listStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  textView: {
    width: '100%',
    height: 'auto'
  },
  textHeading: {
    marginHorizontal: 30,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'semi-bold',
    color: 'black'
  },
  button: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#FE6518',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16
  },
  container: {
    padding: 15,
  },
  tableHeader: {
    color: 'black'
  }
})