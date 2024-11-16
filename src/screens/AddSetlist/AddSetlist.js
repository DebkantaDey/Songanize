import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Pressable, Switch, Button } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';


const AddSetlist = () => {

    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
    });

    const [isBigBrand, setBigBrand] = useState(false);
    const toggleBigBrand = () => {
        if (!isYouAndI) {
            setBigBrand(previousState => !previousState);
        }
    }
    const [isYouAndI, setYouAndI] = useState(false);
    const toggleYouAndI = () => {
        if (!isBigBrand) {
            setYouAndI(previousState => !previousState);
        }
    }
    const navigation = useNavigation();


    return (
        <SafeAreaView >
            <View style={styles.header}>
                <Text style={styles.headerText}>Add a new Setlist</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.inputText}>Event</Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={styles.groupArea}>
                <Text style={styles.inputText}>Group</Text>
                <View style={styles.switches}>
                    <View style={styles.textSwitch}>
                        <Text style={styles.inputText}>Big brand</Text>
                        <View style={styles.container}>
                            <Switch
                                // trackColor={{ false: '#767577', true: '#81b0ff' }}
                                // thumbColor={isBigBrand ? '#f5dd4b' : '#f4f3f4'}
                                // ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleBigBrand}
                                value={isBigBrand}
                            />
                        </View>
                    </View>
                    <View style={styles.textSwitch}>
                        <Text style={styles.inputText}>Just you and I</Text>
                        <View style={styles.container}>
                            <Switch
                                // trackColor={{ false: '#767577', true: '#81b0ff' }}
                                // thumbColor={isYouAndI ? '#f5dd4b' : '#f4f3f4'}
                                //ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleYouAndI}
                                value={isYouAndI}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.dateInputView}>
                <Text style={styles.inputText}>Date</Text>
                <TextInput style={styles.smallInput}></TextInput>
            </View>
            <TouchableOpacity style={styles.addSongsButton} onPress={navigation.navigate('SongList')}>
                <Text style={styles.addSongButtonText}>Add songs</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity> */}
            <View style={styles.saveButton}>
                <Button
                    title="Save"
                    style={styles.saveText}
                    color="#1E6738"
                    onPress={()=>navigation.navigate('SongList')}
                />
            </View>
        </SafeAreaView >
    )
}

export default AddSetlist

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
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 25,
    },
    dateInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 25,
        marginLeft: 20
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
    saveButton: {
        width: 110,
        backgroundColor: 'green',
        borderRadius: 10,
        marginLeft: '60%',
        marginTop: '20%'
    },
    saveText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 15
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: 'lightgray'
    },
    inputText: {
        color: 'black',
        fontSize: 13
    },
    smallInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '70%',
        borderRadius: 10,
        backgroundColor: 'lightgray'
    },
    groupArea: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 15
    },
    switching: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    switches: {
        flexDirection: 'column',
    }
})