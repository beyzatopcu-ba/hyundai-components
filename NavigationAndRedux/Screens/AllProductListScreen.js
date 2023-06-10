import { useEffect } from "react";
import { Text, View } from "react-native";

const AllProductListScreen = () => {
    console.log('rendering AllProductListScreen');

    useEffect(() => {
        console.log('mounted: AllProductListScreen');

        return () => {
            console.log('unmounting: AllProductListScreen');
        };
    }, []);

    return (
        <View>
            <Text>AllProductListScreen</Text>
        </View>
    );
}

export default AllProductListScreen;
