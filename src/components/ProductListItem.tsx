import { StyleSheet, Text, View, Image} from 'react-native';

const ProductListItem = ({ product }) => {
  return(
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.productImage} resizeMode='contain'/>
      <Text style={styles.title}>{product.name}</Text>
      <Text>${product.price}</Text>
    </View>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  productImage:{
    width: '100%',
    aspectRatio: 1,
  }
});
