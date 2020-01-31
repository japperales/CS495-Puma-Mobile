import React from 'react';
import { View, Button } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import PortfolioTable from '../Components/PortfolioTable';

const CurrentPortfolioScreen = (props) => {

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
                <PortfolioTable/>
            </LinearGradient>
        </View>
    );

};
export default CurrentPortfolioScreen;


