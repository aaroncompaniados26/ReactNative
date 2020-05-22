import React from 'react'
import { Text } from 'react-native'


const styles = {
  h1: {
    top: 50 ,
    width: 64 ,
    height: 47 ,
    left: 98 ,
    fontFamily: "Roboto" ,
    fontWeight: "normal" ,
    fontSize: 40 ,
    lineHeight: 47 ,
    /* identical to box height */
    // font-feature-settings: 'tnum' on, 'onum' on, 'cpsp' on, 'ss01' on, 'ss04' on, 'ss07' on ,
    color: "#594242" ,  
    opacity: 0.8 ,
    textShadowColor: "rgba(0, 0, 0, 0.25)" ,
    textShadowOffset: { width: 0 , height: 4 } , 
    textShadowRadius: 4
    // filter: blur(4px);
  }
}

const Greetings = () => {
  let result = '';
  let day = new Date();
  let hr = day.getHours();
  
  hr > 0 && hr <= 6 ? 
    result = 'Sleeping time zZ' :
  hr > 6 && hr <= 12 ? 
    result = 'Morning!' :
  hr > 12 && hr <= 18 ?
    result = 'Afternoon' :
  hr > 18  || hr == 0 ?
    result = 'Night!' 
  :
  'Sorry bro, I got broken'
  
return <Text style={styles.h1}>{result}</Text>
}

export default Greetings;