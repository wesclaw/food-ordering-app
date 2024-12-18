import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products';
import { useState } from 'react'
import Button from '@components/Button'

const sizes = ['S', 'M', 'L', 'XL']


const productDetailScreen = () => {
  const {id}  = useLocalSearchParams()

  const [ selectedSize, setSelectedSize ] = useState('L')
 
  const getProduct = products.find((product)=>product.id.toString()===id)

  const addToCart = () => {
    console.warn('adding to cart, size: ', selectedSize)
  }

  if(!getProduct) {
    return <Text>Product not found</Text>
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{title: getProduct.name}} />
      <Image 
      source={{uri: getProduct.image}} 
      style={styles.image}
      resizeMode="contain"
      />
      <Text style={styles.selectSize}>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map(size=><Pressable onPress={()=>{setSelectedSize(size)}} style={[styles.size, {backgroundColor: selectedSize===size ? 'gainsboro' : 'transparent'}]} key={size}>
          <Text style={[styles.textSize, {color: selectedSize===size?'black':'grey'}]}>{size}</Text></Pressable>)}
      </View>
      <Text style={styles.price}>${getProduct.price}</Text>
      <Button onPress={addToCart} text="Add to cart"/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  image:{
    width: '100%',
   aspectRatio: 1
  },
  selectSize:{
    fontSize: 18
  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
  sizes:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size:{
    backgroundColor: 'gainsboro',
    width: 50,
    borderRadius: 50,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSize:{
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default productDetailScreen

