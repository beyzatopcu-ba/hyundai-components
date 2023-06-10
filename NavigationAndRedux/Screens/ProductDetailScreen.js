import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';

import styles from './styles/ProductDetailScreenStyles';

const ProductDetailScreen = (props) => {
    
    const { product } = props.route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.productTitleText}>{product.title}</Text>
                <TouchableOpacity style={styles.addTouchable}>
                    <Text style={styles.addText}>Sepete Ekle</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default ProductDetailScreen;
