
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
  constructor(props){
    super(props);
    this.state = {
      time: 0 ,
      view: false
    }
  }
  renderPlay(play=false){
    return (
      <TouchableOpacity 
      style={homeStyles.touch}
      onPress={
        () => {
          setInterval( () => {
            this.setState({
              time: this.state.time + 1000
            })
          } , 1000 )
        }
      }
      >
        <Image 
            source={require('./test.webp')}
            style={ homeStyles.icon } 
        />
      </TouchableOpacity>
    )
  }

  renderTimer(){
    const { time } = this.state;
    return (
      <TouchableOpacity 
        onPress={() => console.log('Pressed')}
        style={homeStyles.touch}
      >
        <Text>{time}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const { time } = this.state;
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
            {
              time > 0 ? 
                this.renderTimer()
                :
                this.renderPlay() 
            }
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
