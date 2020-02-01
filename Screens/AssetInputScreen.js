import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import PortfolioContext from '../contexts/PortfolioContext';

const AssetInputScreen = (props) => {
    //hooks used to keep track of the inputs' values
    const [assetCode, setAssetCode] = useState("");
    const [symbol, setSymbol] = useState("");
    const [issue, setIssue] = useState("");
    const [issuer, setIssuer] = useState("");
    const [units, setUnits] = useState("");
    //context pulled for the current portfolio and a method to set it
    const portfolioContext = useContext(PortfolioContext);
    const portfolio = portfolioContext[0];
    const setPortfolio = portfolioContext[1];
    //method that adds an object containing the current values of the fields to the current protfolio context
    const addAsset = (event) => {
            setPortfolio([...portfolio, {
                assetCode: assetCode,
                symbol: symbol,
                issue: issue,
                issuer: issuer,
                units: units
            }]);
    };

    return(
        <View style={{flex: 1, alignItems: "center"}}>
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
                    <Text style={{fontFamily: "Lato-Regular", fontSize: 32, color: "white"}}>
                        Input Asset Details Here
                    </Text>
                </View>

                <View style={{flex: 4}}>

                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Asset Code"
                               placeholderTextColor = "#9a73ef"
                               autoCapitalize = "none"
                               backgroundColor = "white"
                               padding={12}
                               onChangeText={text => setAssetCode(text)}
                    />
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Symbol"
                               placeholderTextColor = "#9a73ef"
                               autoCapitalize = "none"
                               backgroundColor = "white"
                               padding={12}
                               onChangeText={text => setSymbol(text)}
                    />
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Issue"
                               placeholderTextColor = "#9a73ef"
                               autoCapitalize = "none"
                               backgroundColor = "white"
                               padding={12}
                               onChangeText={text => setIssue(text)}
                    />
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Issuer"
                               placeholderTextColor = "#9a73ef"
                               autoCapitalize = "none"
                               backgroundColor = "white"
                               padding={12}
                               onChangeText={text => setIssuer(text)}
                    />
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Quantity"
                               placeholderTextColor = "#9a73ef"
                               autoCapitalize = "none"
                               backgroundColor = "white"
                               padding={12}
                               onChangeText={text => setUnits(text)}
                    />

                    <View style= {{flex: 1, alignItems: "center"}}>

                        <TouchableOpacity style= {{backgroundColor: "green", width: "80%", margin: 30, }} onPress={addAsset}>
                            <Text style={{textAlign: "center", color: "white", fontSize: 30, fontFamily: "Lato-Medium"}} >
                                Add Asset
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </LinearGradient>
        </View>
    );

};
export default AssetInputScreen;


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
        fontFamily: "Lato-Regular",

    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
});
