import { FlatList } from 'react-native';
import products  from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';

export default function MenuScreen() {
  return (
    <FlatList
    data={products}
    renderItem={({item: pizza})=><ProductListItem product={pizza}/>}
    numColumns={2}
    contentContainerStyle={{gap:10, padding: 10}}
    columnWrapperStyle={{gap: 10}}
    />
  );
}

