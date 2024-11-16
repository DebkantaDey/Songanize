import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
//import LogoImage from '../../images/logo.png';
import backgroundImage from '../../images/background.png';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import TextForm from '../../components/forms/TextForm';
import LogoImage from '../../components/logo_image'

const ForgotPassword = () => {

    const navigation = useNavigation();

    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const passwordInput = useRef();
    const confirmPasswordInput = useRef();

    const handleSubmitPress = () => {
        if (!password) {
            passwordInput.current.validateEmail()
        }
        if (!confirmpassword) {
            confirmPasswordInput.current.validateEmail()
        }

    }

    return (
        <View style={styles.outerView}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='always'>
                <ImageBackground source={backgroundImage} style={styles.backgroundImageStyle} resizeMode='cover'>
                    <FontAwesome6
                        name="arrow-left"
                        size={25}
                        color="white"
                        onPress={() => navigation.goBack()}
                        style={styles.goBackArrow}
                    />
                    <View style={styles.outerMiddle}>
                        {/* <Image source={LogoImage} style={styles.logoImage}></Image> */}
                        <LogoImage />
                        <View style={styles.middleArea}>
                            <TextForm
                                placeholder="Password"
                                type="password"
                                isRequired={true}
                                secureTextEntry={true}
                                ref={passwordInput}
                                onChangeText={setPassword}
                            />
                            <TextForm
                                placeholder="Confirm password"
                                type="password"
                                isRequired={true}
                                secureTextEntry={true}
                                ref={confirmPasswordInput}
                                onChangeText={setConfirmPassword}
                            />
                            <TouchableOpacity
                                style={styles.sendButton} onPress={handleSubmitPress}>
                                <Text style={{ color: '#fff' }}>Change Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    outerView: {
        width: '100%',
        height: '100%'
    },
    backgroundImageStyle: {
        width: '100%',
        height: '100%',

    },
    textInputStyle: {
        width: '90%',
        marginTop: 16,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'white',
        borderRadius: 5
    },
    sendButton: {
        width: '50%',
        marginTop: 20,
        height: 45,
        borderRadius: 10,
        backgroundColor: '#f09030',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    logoImage: {
        height: '20%',
        width: '45%',
        justifyContent: 'center',
        margin: 'auto',
        flexDirection: 'row',
        marginTop: 20
    },
    middleArea: {
        width: '90%',
        height: '50%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    outerMiddle: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    goBackArrow: {
        marginHorizontal: 10,
        marginVertical: 10
    }
})