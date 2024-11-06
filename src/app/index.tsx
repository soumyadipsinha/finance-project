import { View, Text,Image } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'

const index = () => {
  return (
    <View>
     <Image source={imagePath.react_logo} />
     <Image source={imagePath.logo} />
    </View>
  )
}

export default index