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
    /* identical to box height */
    // font-feature-settings: 'tnum' on, 'onum' on, 'cpsp' on, 'ss01' on, 'ss04' on, 'ss07' on ,
    color: "#594242" ,  
    opacity: 0.8 ,
    textShadowColor: "rgba(0, 0, 0, 0.25)" ,
    textShadowOffset: { width: 0 , height: 4 } , 
    textShadowRadius: 4
    // filter: blur(4px);
  } ,
  icon: {
    width: 80 ,
    height: 80 ,
    top: 90 ,  
    left: 140 ,
    // mixBlendMode: "overlay" ,
    // boxShadow: "0 4 4 rgba(0, 0, 0, 0.25)" 
    // filter: blur(4) 
  }
})