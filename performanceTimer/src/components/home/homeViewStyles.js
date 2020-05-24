import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column" 
  },
  imgBackg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  h1: {
    marginTop: 50 ,
    textAlign: 'center' ,
    fontFamily: 'cursive' ,
    fontWeight: 'bold',
    fontSize: 40 ,
    color: 'rgb( 255, 255, 255 )' ,
    opacity: 0.6 ,
    textShadowColor: "rgba(0, 0, 0, 0.25)" ,
    textShadowOffset: { width: 0 , height: 4 } , 
    textShadowRadius: 4
  } ,
  touch: {
    display: 'flex' ,
    width: 80 ,
    height: 80 ,
    left: 140 , 
    top: 50 
  },
  icon: {
    width: 80 ,
    height: 80 ,
    opacity: 0.8 
  }
})