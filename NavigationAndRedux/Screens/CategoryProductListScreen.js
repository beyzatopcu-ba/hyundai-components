import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { readProductsOfCategories } from "../Services/ReadProductsOfCategories";

import styles from './styles/CategoryProductListScreenStyles';
import ProductItem from "../Components/ProductItem";

const CategoryProductListScreen = (props) => {

    // Bu ekrana navigate edilirken gönderilen dataya props.route.params üzerinden erişilir.
    const categoryTitle = props.route.params?.categoryTitle;

    const [productList, setProductList] = useState([]);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState();
    const [limit, setLimit] = useState();

    useEffect(() => {
        props.navigation.setOptions({
            title: categoryTitle,
        });
    }, []);
    
    const _readAndSetProductsOfCategories = (nextSkip) => {
        readProductsOfCategories(categoryTitle, nextSkip).then((res) => {
            setProductList([
                ...productList,
                ...res.products,
            ]);
            setSkip(res.skip);
            setTotal(res.total);
            setLimit(res.limit);
        });
    }

    useEffect(() => {
        _readAndSetProductsOfCategories();
    }, []);

    const _onEndReached = () => {
        console.log('reading next page');
        if (skip + limit < total) {
            const _skip = skip + limit;
            _readAndSetProductsOfCategories(_skip);
        }
    }

    const _renderProductItem = ({ item }) => {
        return (
            <ProductItem product={item} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={productList}
                renderItem={_renderProductItem}
                keyExtractor={(item) => item.id}
                onEndReached={_onEndReached}
            />
        </View>
    );
}

export default CategoryProductListScreen;
