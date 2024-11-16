import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import LogoImage from '../../images/logo.png';
//import CheckBox from 'react-native-check-box'
import backgroundImage from '../../images/background.png';
//import LogoImage from '../../components/logo_image'
import { useNavigation } from '@react-navigation/native';
import TextForm from '../../components/forms/TextForm';
import CheckBoxKus from '../../components/forms/Checkbox';
//import { ScrollView } from 'react-native-gesture-handler';

const Registration = () => {

    const [UserName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errortext, setErrortext] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const [termsAccepted, settermsAccepted] = useState(true);

    const handleSubmitPress = () => {
        //navigation.replace('DrawerNavigationRoutes');
        //navigation.navigate('DashboardScreen');
        console.log(email + '-->' + password);
        if (!email) {
            emailInput.current.validateEmail()
        }
        if (!password) {
            passwordInput.current.validateEmail()
        }
        if (!UserName) {
            nameInput.current.validateEmail()
        }
        if (!firstName) {
            firstNameInput.current.validateEmail()
        }
        if (!lastName) {
            lastNameInput.current.validateEmail()
        }
        
    }


    const handleCheckBox = () => {
        settermsAccepted(true);
    }
    const [Checked, setChecked] = useState(false)
    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height:"100%"}}>
            <View style={styles.inputContainer}>
                <ImageBackground source={backgroundImage} style={styles.backgroundImageStyle} resizeMode='cover'>
                    <View style={styles.middleArea}>
                        <Image source={LogoImage} style={styles.logoImage}></Image>
                        <TextForm
                            placeholder="Username"
                            type="email"
                            isRequired={true}
                            ref={nameInput}
                            onChangeText={setUserName}
                            className='inputViewTextIcon'
                        />
                        <TextForm
                            placeholder="Password"
                            type="password"
                            isRequired={true}
                            secureTextEntry={true}
                            ref={passwordInput}
                            onChangeText={setPassword}
                        />
                        <TextForm
                            placeholder="E-Mail"
                            type="email"
                            isRequired={true}
                            secureTextEntry={true}
                            ref={emailInput}
                            onChangeText={setEmail}
                        />
                        <TextForm
                            placeholder="First name"
                            type="text"
                            isRequired={true}
                            secureTextEntry={true}
                            ref={firstNameInput}
                            onChangeText={setFirstName}
                        />
                        <TextForm
                            placeholder="Last name"
                            type="text"
                            isRequired={true}
                            secureTextEntry={true}
                            ref={lastNameInput}
                            onChangeText={setLastName}
                        />
                        {/* <View style={styles.checkboxView}>
                            <CheckBox
                                style={styles.checkboxStyle}
                                onClick={() => {
                                    setChecked(!Checked)
                                }}
                                isChecked={Checked}
                                rightText={"I accept your terms and condition"}
                                borderColor={"#fff"}
                            />
                            <Text style={styles.termsText}>I accept your terms and condition</Text>
                        </View> */}
                        <View style={styles.MainermsConditions}>
                            <CheckBoxKus
                                selected={termsAccepted}
                                onPress={handleCheckBox}
                                text='I accept your terms and condition'
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.registerButton}
                            onPress={() => handleSubmitPress()}
                        >
                            <Text style={styles.registerText}>Register now</Text>
                        </TouchableOpacity>
                        <Text style={styles.loginText}>Already have an account <Text onPress={() => navigation.goBack()}>Login</Text></Text>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    )
}

export default Registration

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
    },
    backgroundImageStyle: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputStyle: {
        width: '80%',
        marginTop: 16,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'white',
        borderRadius: 5
    },
    registerButton: {
        width: '60%',
        height: 45,
        borderRadius: 10,
        backgroundColor: '#f09030',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkboxView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'fitContent',
        width: '100%',
        height: 50,
        flexDirection: 'row'
    },
    logoImage: {
        height: '11%',
        width: '25%',
        justifyContent: 'center',
        margin: 'auto',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },
    termsText: {
        color: 'white',
        fontSize: 15
    },
    registerText: {
        color: 'white',

    },
    middleArea: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    checkboxStyle: {
        borderColor: 'white',
        color: 'white',

    },
    loginText: {
        color: 'white',
        fontSize: 15,
    },
    MainermsConditions: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        paddingLeft: 20
    },
})