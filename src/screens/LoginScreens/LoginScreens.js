
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef, ReactNode } from 'react'
import backgroundImage from '../../images/background.png';
import LogoImage from '../../components/logo_image'
import { useNavigation } from '@react-navigation/native';
import TextForm from '../../components/forms/TextForm';


export default function LoginIndex({ navigations, props }) {

  const [userData, setUserData] = useState({
    userEmail: '',
    userPass: ''
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errortext, setErrortext] = useState('');
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmitPress = () => {

    
    console.log(email + '-->' + password);
    if (!email) {
      emailInput.current.validateEmail()
    }
    if (!password) {
      passwordInput.current.validateEmail()
    }
    else{
      navigation.navigate('Tab')
    }
  }
  // const [errortext, setErrortext] = useState('');
  // const emailInput = useRef();
  // const passwordInput = useRef();

  // const handleSubmitPress = () => {
  //   navigation.replace('DrawerNavigationRoutes');
  //   //navigation.navigate('DashboardScreen');
  //   console.log(userData.userEmail + '-->' + userData.userPass);
  //   if (!userData.userEmail) {
  //     emailInput.current.validateEmail()
  //   }
  //   if (!userData.userPass) {
  //     passwordInput.current.validateEmail()
  //   }

  //   fetch(Urls.login, {
  //     method: 'POST',
  //     body: (userData),
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       console.log(JSON.stringify(userData));
  //       if (responseJson.success == 0) {
  //         let data = responseJson;
  //         console.log(data);
  //       } else {
  //         setErrortext('Please check your user name or password');
  //       }
  //     })
  //     .catch(error => {
  //       setErrortext(
  //         'An error occured, Please check your internet and try again later.',
  //       );
  //       console.error('rrr->' + error);
  //     });
  // }

  const dataHandler = (e) => {
    setUserData(...userData, [e.target.name] = e.target.value)
  }
  const navigation = useNavigation();

  return (
    <View style={styles.wholePage}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='always'>
        <ImageBackground source={backgroundImage} style={styles.backgroundImageStyle} resizeMode='cover'>
          <View style={styles.middleArea}>
            <LogoImage />

            <TextForm
              placeholder="E-Mail or Username"
              type="email"
              isRequired={true}
              ref={emailInput}
              onChangeText={setEmail}
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
            <View style={styles.forgotPassword}>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.loginButtonsStyle}
              onPress={() => handleSubmitPress()}
            //onPress={() => navigation.navigate('Tab')}
            >
              <Text style={{ color: '#fff' }}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.createAccountButtonStyle} onPress={() => navigation.navigate('Registration')}>
              <Text style={{ color: '#fff' }}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wholePage: {
    width: '100%',
    height: '100%'
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
  loginButtonsStyle: {
    width: '50%',
    marginTop: 16,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#FE6518',
    alignItems: 'center',
    justifyContent: 'center'
  },
  createAccountButtonStyle: {
    width: '50%',
    marginTop: 48,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#15B4FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  middleArea: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  forgotPassword: {
    width: '75%',
    alignItems: 'flex-end'
  },
  forgotPasswordText: {
    color: '#fff',
    marginTop: 0,
    fontSize: 16
  }
})