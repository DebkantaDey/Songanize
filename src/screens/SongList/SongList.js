import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';

const SongList = () => {

    const [itemList, setItemList] = useState([
        { key: '1', description: 'Item 1' },
        { key: '2', description: 'Item 2' },
        { key: '3', description: 'Item 3' },
        { key: '4', description: 'Item 4' },
        { key: '5', description: 'Item 5' },
    ])

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteItem = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...itemList];
        const prevIndex = itemList
            .findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setItemList({ itemList: newData });

    };
    const onRowOpen = rowKey => {
        console.log('Opened row with key:', rowKey);
    };
    const renderItem = rowData => (
        <TouchableOpacity
            onPress={() => console.log('Item touched')}
            style={styles.itemContainer}
        >
            <Text style={styles.itemText}>
                {rowData.item.description}
            </Text>
        </TouchableOpacity>
    );

    const renderHiddenItem = (rowData, rowMap) => (
        <View style={styles.hiddenContainer}>
            <TouchableOpacity
                style={[styles.hiddenButton, styles.closeButton]}
                onPress={() => closeRow(rowMap, rowData.item.key)}
            >
                <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.hiddenButton, styles.deleteButton]}
                onPress={() => deleteItem(rowMap, rowData.item.key)}
            >
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView >
            <View style={styles.header}>
                <Text style={styles.headerText}>Setlist</Text>
            </View>
            <View style={styles.song}>
                <View style={styles.songDetails}>
                    <Text>Event: Irish Pub Dalatia</Text>
                    <Text>Group: Big brand</Text>
                    <Text>Date: 13/10/2024</Text>
                </View>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addSongsButton}>
                <Text style={styles.addSongButtonText}>Add songs</Text>
            </TouchableOpacity>
            <SwipeListView
                data={itemList}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowOpen}
            />
        </SafeAreaView >
    )
}

export default SongList

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    headerText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'black',
    },
    addSongsButton: {
        width: '80%',
        borderRadius: 5,
        backgroundColor: '#FE6518',
        height: 45,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 35
    },
    addSongButtonText: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 16
    },
    editButton: {
        height: 42,
        width: 110,
        backgroundColor: 'green',
        borderRadius: 10,
    },
    editText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 15
    },
    song: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal: 20,
        marginVertical: 20
    },
    songDetails: {
        width: '60%',
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF', // White 
        borderBottomColor: '#E0E0E0', // Lighter Gray 
        borderBottomWidth: 1,
        height: 80,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 10,
    },
    itemText: {
        color: '#333', // Dark Gray 
        fontSize: 16,
        fontWeight: 'bold',
    },
    hiddenContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 80,
        borderRadius: 20,
    },
    hiddenButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: 80,
    },
    closeButton: {
        backgroundColor: 'green', // Blue 
        borderRadius: 20,
    },
    deleteButton: {
        backgroundColor: '#E74C3C', // Red 
        borderRadius: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
})