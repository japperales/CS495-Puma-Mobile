import React from 'react';
import { createAppContainer } from 'react-navigation';
import  LoginScreen  from './LoginScreen'
import AssetInputScreen from './AssetInputScreen';
import createBottomTabNavigator from 'react-navigation-tabs/src/navigators/createBottomTabNavigator';
import CurrentPortfolioScreen from './CurrentPortfolioScreen';
import ResultsScreen from './ResultsScreen';
//the navigator allows us to switch between the included screen components through the bottom bar it renders
const TabNavigator = createBottomTabNavigator({
    Login: { screen: LoginScreen },
    Input: { screen: AssetInputScreen },
    Portfolio: {screen: CurrentPortfolioScreen},
    Results: {screen: ResultsScreen}
});

export default createAppContainer(TabNavigator);

