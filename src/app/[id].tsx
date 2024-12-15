import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const productDetailScreen = () => {
  const {id}  = useLocalSearchParams()
  return (
    <View>
      <Text>product helloo for: {id}</Text>
    </View>
  )
}

export default productDetailScreen