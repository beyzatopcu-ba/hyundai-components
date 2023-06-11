import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles/CartScreenStyles';
import { cartSelectors, cartSlice } from "../Redux/CartRedux";

const CartScreen = () => {

    // Buradaki state, tüm store'un state'i
    const cartProducts = useSelector(cartSelectors.cartProductList);
    const dispatch = useDispatch();

    const _onPress_ClearCart = () => {
        dispatch(cartSlice.actions.clearCart());
    }

    const _renderCartProductItem = ({ item }) => {

        const _onPress_Plus = () => {
            dispatch(cartSlice.actions.addOneProduct(item));
        }

        const _onPress_Minus = () => {
            dispatch(cartSlice.actions.removeOneProduct(item));
        }

        return (
            <View style={styles.cartProductItemContainer}>
                <Text style={styles.productTitleText}>{item.title}</Text>
                <View style={styles.countButtonsContainer}>
                    <TouchableOpacity style={styles.buttonTouchable} onPress={_onPress_Plus}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.countText}>{item.count}</Text>
                    <TouchableOpacity style={styles.buttonTouchable} onPress={_onPress_Minus}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cartProducts}
                renderItem={_renderCartProductItem}
                keyExtractor={item => item.id}
            />
            {
                cartProducts.length === 0 ?
                    null
                    :
                    <TouchableOpacity style={styles.buttonTouchable} onPress={_onPress_ClearCart}>
                        <Text style={styles.buttonText}>Sepeti Boşalt</Text>
                    </TouchableOpacity>
            }
        </View>
    );
}

export default CartScreen;
