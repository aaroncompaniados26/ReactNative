import React from 'react';
import { 
  View , 
  Text , 
  ImageBackground , 
  Image ,
  TouchableOpacity
} from 'react-native';
// Comps.
import Greetings from '../utils/Greetings'
import GetFecha from '../utils/date'

const styles = {
  imgBackg: {
    width: '100%' ,
    height: '100%'
  },
  icon: {
    width: 80 ,
    height: 80 ,
    top: 90 ,  
    left: 140 ,
    // mixBlendMode: "overlay" ,
    // boxShadow: "0 4 4 rgba(0, 0, 0, 0.25)" 
    // filter: blur(4) 
  }
}

const Homeview = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./lion.webp')}
        resizeMode='cover'
        style={ styles.imgBackg }
      >
        <View style={{ flex: 0.90 }}>
          <Text><Greetings /></Text>
        </View>
        <View style={{ flex: 1}}>
          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <Image 
              source={require('./27223.webp')}
              style={ styles.icon } 
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}><GetFecha /></View>
      </ImageBackground>
    </View>
  )
}

export default Homeview;
