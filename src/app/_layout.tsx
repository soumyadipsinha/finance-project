import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Rootnavigation = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index"/>
    </Stack>
  )
}

export default Rootnavigation