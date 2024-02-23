import { View, Text, Image } from 'react-native'
import React from 'react'



const App = () => {
  return (
    <View>
      <Text>Hi we are team focused!</Text>
      <Image source={{uri:'https://imgs.search.brave.com/dmZGZyeq_XvEKHfgXy9onDx_4rldV-Ur5ksPVPpTvX4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA2Lzk4LzI2/LzM2MF9GXzYwNjk4/MjY2MF84UlNjaERl/Zkw0eFhaT2hoVkh1/c25GRHB6eWVlMHFG/ZC5qcGc',}}
      style={{width: 350, height: 350}} />
    </View>
  )
}

export default App