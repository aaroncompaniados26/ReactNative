import React from 'react'
import { Text } from 'react-native'


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
  
  return <Text>{result}</Text>
}

export default Greetings;