import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products';

const sizes = ['S', 'M', 'L', 'XL']


const productDetailScreen = () => {
  const {id}  = useLocalSearchParams()
  
  const getProduct = products.find((product)=>product.id.toString()===id)

  if(!getProduct) {
    return <Text>Product not found</Text>
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{title: getProduct.name}} />
      <Image source={{uri: getProduct.image}} style={styles.image}/>
      <Text>Select size</Text>

      <View style={styles.sizes}>
        {sizes.map(size=>
        <View style={styles.size}>
          <Text key={size}>{size}</Text>
        </View>
      )}
      </View>
      <Text style={styles.price}>{getProduct.price}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image:{
    width: '100%',
    aspectRatio: 1,
  },
  title:{

  },
  price:{
    fontSize: 19,
    fontWeight: 'bold'
  },
  sizes:{

  },
  size:{

  },
})

export default productDetailScreen

