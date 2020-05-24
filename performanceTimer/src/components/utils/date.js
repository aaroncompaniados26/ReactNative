import React from 'react'
import { Text } from 'react-native'

const styles = {
  dat: {
    top: 60 ,
    right: 20 ,
    textAlign: 'right',
    fontFamily: 'cursive' ,
    fontWeight: 'bold',
    fontSize: 30 ,
    color: "rgb(188,182,182)" ,  
    opacity: 0.5 ,
    textShadowColor: "rgba(0, 0, 0, 0.25)" ,
    textShadowOffset: { width: 0 , height: 4 } , 
    textShadowRadius: 4
  }
}

const GetFecha = () => <Text style={styles.dat}>
  {new Date().toISOString().slice(0, 10)}
</Text>


export default GetFecha; 

