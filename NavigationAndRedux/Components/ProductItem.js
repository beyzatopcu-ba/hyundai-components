import { Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles/ProductItemStyles';

/**
 * @param {object} props 
 * @param {import('../Services/ReadProductsOfCategories').ProductItem} props.product
 */
const ProductItem = (props) => {

    const { product } = props;

    /*
    Bu component instance'ı hangi ekran içindeyse
    o ekranın eriştiği navigation ve route objelerinin aynısı
    bu hooklardan döner.
    */
    const navigation = useNavigation();
    /*
    const route = useRoute();
    console.log(route.params);
    */

    const _onPress = () => {
        /*
        Best practice olarak, bir itemin detayına giderken komple itemi değil,
        id'sini göndermek ve detay ekranında o id ile detay bilgisini apiden, redux store'dan, vs. okuyup
        göstermek daha doğru.
        Bu uzun sürdüğü için eğitim amacıyla şimdilik komple itemi gönderiyoruz.
        */
        navigation.navigate('ProductDetailScreen', {
            product,
        });
    };

    return (
        <TouchableOpacity
            style={styles.productItemTouchable}
            onPress={_onPress}>
            <Text
                style={styles.productItemTitleText}>
                {product.title}
            </Text>
        </TouchableOpacity>
    );
}

export default ProductItem;