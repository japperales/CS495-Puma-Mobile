import React, { useContext, useState } from 'react'
import {
    Platform,
    StyleSheet,
    View,
    Text, TouchableOpacity,
} from 'react-native';
import Table from 'react-native-simple-table'
import PortfolioContext from '../contexts/PortfolioContext';
import TokenContext from '../contexts/TokenContext';
import LinearGradient from "react-native-linear-gradient";



const columns = [
    {
        title: 'Trade Type Name',
        dataIndex: 'tradeTypeName',
        width: 75
    },
    {
        title: 'Trade Option Type',
        dataIndex: 'tradeBasisOptionType',
        width: 75
    },
    {
        title: 'Registration Type Name',
        dataIndex: 'registrationTypeName',
        width: 75
    },
    {
        title: 'Unit Shares',
        dataIndex: 'unitShares',
        width: 75
    },
    {
        title: 'Asset Name',
        dataIndex: 'assetName',
        width: 75
    }
];

const ResultsScreen = (props) => {
    const tokenContext = useContext(TokenContext);
    const token = tokenContext[0];

    const portfolioContext = useContext(PortfolioContext);
    const currentPortfolio = portfolioContext[0];

    const [response, setResponse] = useState([[],[],"0", "0"]);
    const [trades, setTrades] = useState([]);

    const submitPortfolio = () => {

        const requestPortfolio = convertPortfolioToSubmissionsFormat();

        fetch('http://10.0.2.2:5000/api/Puma/PostAssets', {
            method: 'POST',
            headers: {
                'jwt': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestPortfolio)
        }).then(response => response.json())
            .then(responseJson => {
                setResponse(responseJson);
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                return error;
            });
    };

    const convertPortfolioToSubmissionsFormat = () => {
        const submittablePortfolio = [];

        for(let asset of currentPortfolio){

            let submittableAsset = {
            AssetIdentifier: {
                assetCode: asset.assetCode,
                symbol: asset.symbol,
                issue: asset.issue,
                issuer: asset.issuer
            },
            units: parseInt(asset.units, 10)
            };

            submittablePortfolio.push(submittableAsset);
        }
        return submittablePortfolio;
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
        <View style={styles.container}>
            <TouchableOpacity style= {{backgroundColor: "green", width: "80%", margin: 30, }} onPress={submitPortfolio}>
                <Text style={{textAlign: "center", color: "white", fontSize: 30, fontFamily: "Lato-Medium"}}>
                    Submit Portfolio
                </Text>
            </TouchableOpacity>
            <Text style={styles.text}>
            Net Worth Increase: ${response[2]}
            </Text>
            <Text style={styles.text}>
            Net Monthly Income Increase: ${response[3]}
            </Text>
            <Text style={styles.title}>Trades To Make</Text>
            <Table height={500} columnWidth={60} columns={columns} dataSource={response[1]} />

        </View>

        </LinearGradient>
    );

};

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                paddingTop: 20
            },
            android: {}
        }),
        fontFamily: "Lato-Regular"
    },
    title: {
        color: "white",
        fontFamily: "Lato-Regular",
        fontSize: 18,
        padding: 10,
        textAlign: 'center'
    },
    text: {
        color: "white",
        fontFamily: "Lato-Regular",
        fontSize: 14,
        padding: 5,
        textAlign: "center"
    }
});

export default ResultsScreen;
