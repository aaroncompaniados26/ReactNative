import React from 'react'
import { Text } from 'react-native'

const styles = {
  dat: {
    left: 60 ,
    top: 75 ,
    fontFamily: "Roboto" ,
    fontSize: 40 ,
    lineHeight: 47 ,
    /* identical to box height */
    textAlign: "center" ,
    // font-feature-settings: 'tnum' on, 'onum' on, 'cpsp' on, 'ss04' on, 'ss07' on, 'ss01' on, 'ss03' on ,
    color: "rgba(255, 255, 255, 0.97)" ,  
    textShadowColor: "rgba(0, 0, 0, 0.25)" ,
    textShadowOffset: { width: 0 , height: 4 } ,
    textShadowRadius: 14
    // filter: blur(4px)
  }
}

const GetFecha = () => <Text style={styles.dat}>
  {new Date().toISOString().slice(0, 10)}
</Text>


export default GetFecha; 

