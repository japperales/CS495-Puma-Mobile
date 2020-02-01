import React, { useContext } from 'react'
import {
    Platform,
    StyleSheet,
    View,
    Text
} from 'react-native'
import Table from 'react-native-simple-table'
import PortfolioContext from '../contexts/PortfolioContext';



const columns = [
    {
        title: 'Asset Code',
        dataIndex: 'assetCode',
        width: 75
    },
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        width: 75
    },
    {
        title: 'Issue',
        dataIndex: 'issue',
        width: 75
    },
    {
        title: 'Issuer',
        dataIndex: 'issuer',
        width: 75
    },
    {
        title: 'Units',
        dataIndex: 'units',
        width: 75
    },
];
//table for displaying the portfolio on the current portfolio screen
const PortfolioTable = (props) => {
    //displays the current portfolio pulled from the global
    const portfolioContext = useContext(PortfolioContext);
    const currentPortfolio = portfolioContext[0];

    return (
            <View style={styles.container}>
                <Text style={styles.title}>Current Portfolio</Text>
                <Table height={500} columnWidth={60} columns={columns} dataSource={currentPortfolio} />
            </View>
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
    }
});

export default PortfolioTable;
