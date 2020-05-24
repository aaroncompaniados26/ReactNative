
import React, { Component } from 'react'
import { 
  View , 
  Text , 
  ImageBackground , 
  Image ,
  TouchableOpacity 
} from 'react-native';
import { homeStyles } from './homeViewStyles'
// Comps.
import Greetings from '../utils/Greetings'
import GetFecha from '../utils/date'


class Homeview extends Component {
  render() {
    return (
      <View style={homeStyles.container}>
        <ImageBackground
          source={require('./lion.webp')}
          resizeMode='cover'
          style={ homeStyles.imgBackg }
        >
          <View style={{ flex: 0.90 }}>
            <Text style={homeStyles.h1}><Greetings /></Text>
          </View>
          <View style={{ flex: 1}}>
            <TouchableOpacity 
              onPress={() => console.log('Pressed')}
              style={homeStyles.touch}
            >
              <Image 
                  source={require('./test.webp')}
                  style={ homeStyles.icon } 
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <GetFecha />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default Homeview;
