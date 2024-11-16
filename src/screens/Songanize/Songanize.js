import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DataTable } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Sound = require('react-native-sound');
Sound.setCategory('Playback');
const audio = new Sound(
  'https://pixabay.com/music/folk-celtic-irish-scottish-tin-whistle-background-music-10455/',
  null,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    console.log(
      'duration in seconds: ' +
      audio.getDuration() +
      'number of channels: ' +
      audio.getNumberOfChannels(),
    );
  },
);


const Songanize = () => {

  // const [file, setFile] = useState(null);

  // const [error, setError] = useState(null);

  // const pickImage = async () => {
  //   const { status } = await ImagePicker.
  //     requestMediaLibraryPermissionsAsync();

  //   if (status !== "granted") { 
  //     Alert.alert(
  //       "Permission Denied",
  //       `Sorry, we need camera  
  //            roll permission to upload images.`
  //     );
  //   } else {
  //     const result =
  //       await ImagePicker.launchImageLibraryAsync();

  //     if (!result.cancelled) {
  //       setFile(result.uri);
  //       setError(null);
  //     }
  //   }
  // };

  const [playing, setPlaying] = useState();
  useEffect(() => {
    audio.setVolume(1);
    return () => {
      audio.release();
    };
  }, []);
  const playPause = () => {
    if (audio.isPlaying()) {
      audio.pause();
      setPlaying(false);
    } else {
      setPlaying(true);
      audio.play(success => {
        if (success) {
          setPlaying(false);
          console.log('successfully finished playing');
        } else {
          setPlaying(false);
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  };

  const uploadAudio = async () => {
    const path = ``
    const formData = new FormData()
    formData.append('file', {
      uri: path,
      name: 'test.aac',
      type: 'audio/aac',
    })
    try {
      const res = await fetch('File uploaded', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
      const json = await res.json()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <ScrollView>
      <Text style={styles.heading}>Songs</Text>
      <View>
        <TouchableOpacity style={styles.button}
          onPress={uploadAudio}>
          <Text style={styles.buttonText1}>
            +ADD SONGS
          </Text>
          <Text style={styles.buttonText2}>
            drag and drop or tap here
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.container}>
        <TouchableOpacity style={styles.playBtn} onPress={playPause}>
          <Ionicons
            name={playing ? 'ios-pause-outline' : 'ios-play-outline'}
            size={36}
            color={'#fff'}
          />
        </TouchableOpacity>
      </View> */}
      <View style={styles.middleArea}>
        <TextInput style={styles.textInput}
          placeholder='Suchen'
        ></TextInput>
        <TouchableOpacity style={styles.songList}>
          <Text style={styles.songListText}>My hidden songs</Text>
        </TouchableOpacity>
      </View>
      <View>
        <DataTable style={styles.container}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title style={styles.tableHeader}>Title</DataTable.Title>
            <DataTable.Title style={styles.tableHeader}>Interpreet</DataTable.Title>
            <DataTable.Title style={styles.tableHeader}>Type</DataTable.Title>
            <DataTable.Title style={styles.tableHeader}>By</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Irish Pup Dashiram</DataTable.Cell>
            <DataTable.Cell>Brand</DataTable.Cell>
            <DataTable.Cell>Lyrics</DataTable.Cell>
            <DataTable.Cell>
              <Image style={styles.userImage} source={{ uri: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' }} borderRadius={50}></Image>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Song</DataTable.Cell>
            <DataTable.Cell>Just you and I</DataTable.Cell>
            <DataTable.Cell>Lyrics</DataTable.Cell>
            <DataTable.Cell>
              <Image style={styles.userImage} borderRadius={50}></Image>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Events</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell>Lyrics</DataTable.Cell>
            <DataTable.Cell>
              <Image style={styles.userImage}></Image>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </ScrollView>
  )
}

export default Songanize

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginLeft: '6%',
    marginVertical: 20,
    color: 'black',
    fontWeight: 'semibold'
  },
  middleArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '40%',
    borderRadius: 5,
    borderColor: '#FE6518'
  },
  songList: {

    padding: 2,
    width: '40%',
    backgroundColor: 'blue',
    borderRadius: 5
  },
  songListText: {
    color: 'white',
    textAlign: 'center'
  },
  container: {
    padding: 15,
  },
  tableHeader: {
    color: 'black'
  },
  userImage: {
    width: '48%',
    height: '80%',
  },
  button: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    width: '90%',
    borderStyle: 'dashed',
    borderWidth: 2,
    marginRight: 'auto',
    marginLeft: 'auto',
    height: 120,
    borderColor: '#FE6518'
  },
  buttonText1: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  buttonText2: {
    color: "black",
    fontSize: 16,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  imageUpload: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  playBtn: {
    padding: 20,
  },
})