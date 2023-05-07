import React from 'react';
import { Text, TouchableOpacity } from "react-native";

const ProductItem = (props) => {
    const product = props.product;

    console.log('rendering');

    const _onPress = () => {
        props.onPress(product.id);
    }

    return (
        <TouchableOpacity onPress={_onPress}>
            <Text>{product.title}</Text>
        </TouchableOpacity>
    );
}

export default React.memo(ProductItem, (prevProps, nextProps) => {
    // return JSON.stringify(prevProps.product) === JSON.stringify(nextProps.product);
    return (
        prevProps.product.id === nextProps.product.id
        &&
        prevProps.onPress === nextProps.onPress
    );
});
