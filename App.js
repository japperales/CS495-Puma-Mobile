/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';

const App: () => React$Node = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState();
    const [jwt, setJwt] = useState();


    const attemptLogin = (username, password) => {
        fetch('https://localhost:5001/api/Puma/PostLogin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then((response => {
            const responseObject = JSON.parse(response);
            if (typeof responseObject.Jwt === undefined) {
                setLoginError("Login Failed. Please Try Again")
            } else {
                setJwt(responseObject.Jwt);
                setLoginError("");

            }
           //add navigation here
        })).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            return error;
        });
    };


    return (

      <LinearGradient
          colors={["#2a5298", "#1e3c72"]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: "100%",
          }}>

          <View style={{flex: 1, alignItems: "center"}}>

        <Text style={{fontFamily: "Lato-Regular", fontSize: 64, color: "white"}}>
          Welcome
        </Text>

        <Text style={{fontFamily: "Lato-Light", fontSize: 32, color: "white"}}>
          To Accutech Puma
        </Text>

          </View>


              <View style={{flex: 2}}>
        <Text style= {{textAlign: "center", color: "white", fontSize: 24, fontFamily: "Lato-Medium"}}>Please Log In</Text>

        <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Username"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                   backgroundColor = "white"
                   padding={12}
                   onChangeText={text => setUsername(text)}
                   />
<Text> {username} </Text>
        <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Password"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                   backgroundColor = "white"
                   padding={12}
                   secureTextEntry={true}
                   onChangeText={text => setPassword(text)}
                   />
<Text>
    {password}
</Text>
                  <Text>
                      {jwt}
                  </Text>

                   <View style= {{flex: 1, alignItems: "center"}}>
                       <Text style={{textAlign: "center", color: "red", fontSize: 14, fontFamily: "Lato-Medium"}}>{loginError}</Text>
        <TouchableOpacity style= {{backgroundColor: "green", width: "80%", margin: 30, }} onSubmitEditing={attemptLogin(username, password)}>
            <Text style={{textAlign: "center", color: "white", fontSize: 30, fontFamily: "Lato-Medium"}}>
                Sign In
            </Text>
        </TouchableOpacity>
                   </View>
          </View>

      </LinearGradient>

  );
};

const styles = StyleSheet.create({

  container: {
    paddingTop: 23,
      alignItems: 'center'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
      fontFamily: "Lato-Regular"
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  },
    text: {

    }
});

export default App;
