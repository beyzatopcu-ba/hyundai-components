import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';

import styles from './styles/ProductDetailScreenStyles';
import { cartSlice } from '../Redux/CartRedux';

const ProductDetailScreen = (props) => {
    
    const { product } = props.route.params;
    const dispatch = useDispatch();

    const _onPress_AddToCart = () => {
        dispatch(cartSlice.actions.addOneProduct(product));
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.productTitleText}>{product.title}</Text>
                <TouchableOpacity style={styles.addTouchable} onPress={_onPress_AddToCart}>
                    <Text style={styles.addText}>Sepete Ekle</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default ProductDetailScreen;
