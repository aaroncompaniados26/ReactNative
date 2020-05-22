/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
// Pages
import HomeView from './src/components/home/Homeview';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeView style={{position: "relative"}}/>
    </SafeAreaView>
  );
};



export default App;
