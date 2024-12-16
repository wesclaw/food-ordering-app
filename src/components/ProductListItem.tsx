import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { Link } from 'expo-router'

const ProductListItem = ({ product }) => {
  return(
    <Link href={`../menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image source={{uri: product.image}} style={styles.productImage} resizeMode='contain'/>
      <Text style={styles.title}>{product.name}</Text>
      <Text>${product.price}</Text>
    </Pressable>
    </Link>
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
