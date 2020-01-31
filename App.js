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
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import LoginScreen from './Screens/LoginScreen';
import TokenContext from './contexts/TokenContext';
import AppContainer from './Screens/AppContainer';
import PortfolioContext from './contexts/PortfolioContext';

const App: () => React$Node = () => {
  const [token, setToken] = useState();
  const [currentPortfolio, setCurrentPortfolio] = useState([]);


    return (
        <TokenContext.Provider value={[token, setToken]}>
          <PortfolioContext.Provider value={[currentPortfolio, setCurrentPortfolio]}>
        <AppContainer />
        </PortfolioContext.Provider>
        </TokenContext.Provider>
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


//<LoginScreen setToken={setToken} />
