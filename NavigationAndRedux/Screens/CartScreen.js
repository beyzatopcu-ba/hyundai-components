import { useEffect } from "react";
import { Text, View } from "react-native";

const CartScreen = () => {
    console.log('rendering AllProductListScreen');

    useEffect(() => {
        console.log('mounted: AllProductListScreen');

        return () => {
            console.log('unmounting: AllProductListScreen');
        };
    }, []);

    return (
        <View>
            <Text>CartScreen</Text>
        </View>
    );
}

export default CartScreen;
