import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  imgBackg: {
    width: '100%' ,
    height: '100%'
  },
  h1: {
    marginTop: 50 ,
    textAlign: 'center' ,
    color: '#FFF' ,
    fontFamily: "Roboto" ,
    fontSize: 40 ,
    lineHeight: 47 ,
    color: "#594242" ,  
    opacity: 0.8 ,
    textShadowColor: "rgba(0, 0, 0, 0.25)" ,
    textShadowOffset: { width: 0 , height: 4 } , 
    textShadowRadius: 4
  } ,
  touch: {
    display: 'flex' ,
    width: 100 ,
    height: 100 ,
    left: 140 , 
    top: 50
  },
  icon: {
    width: 80 ,
    height: 80 
  }
})