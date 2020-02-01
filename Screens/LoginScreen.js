import React, { useState, useContext } from 'react';
import  TokenContext  from "../contexts/TokenContext"
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const LoginScreen: () => React$Node = (props) => {
    //hooks to track the input fields' values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //loginError hook tracks if there is a login error to be displayed
    const [loginError, setLoginError] = useState();
    //import the token context to set the token for use by other screens
    const tokenContext = useContext(TokenContext);
    const setToken = tokenContext[1];

    //fetch method for requesting a token using the login field's username and password values
    const attemptLogin = (event) => {
        const login ={username, password};
        fetch('http://10.0.2.2:5000/api/Puma/PostLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        }).then(response =>response.json())
            .then(responseJson => {
                if (typeof responseJson.Jwt === undefined) {
                    //if the request return something that doesn't have a jwt token, then the request failed and a login error is displayed
                    setLoginError("LoginScreen Failed. Please Try Again")
                } else {
                    //if the request succeeded and has a token, then the context token is set and any login error being displayed is erased
                    setToken(responseJson.Jwt);
                    setLoginError("");
                    //after a successful login attempt, the app then navigates to the asset input screen with the token
                    props.navigation.navigate('Input', {token: responseJson.Jwt});
                }
                })
            .catch(function(error) {
                //in case some miscellaneous error occurs with the fetch request, it will be documented here in the console
                console.log('There has been a problem with your fetch operation: ' + error.message);
                setLoginError("Login Failed. Please Try Again");
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
                <View style= {{flex: 1, alignItems: "center"}}>
                    <Text style={{textAlign: "center", color: "red", fontSize: 14, fontFamily: "Lato-Medium"}}>{loginError}</Text>
                    <TouchableOpacity style= {{backgroundColor: "green", width: "80%", margin: 30, }} onPress={attemptLogin}>
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

export default LoginScreen;
