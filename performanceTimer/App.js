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
import Homeview from './src/components/home/Homeview';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Homeview style={{position: "relative"}}/>
    </SafeAreaView>
  );
};



export default App;
