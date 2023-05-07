import { useCallback, useEffect, useState } from "react"
import { FlatList, SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { measure } from "../Metrics";
import ProductItem from "./ProductItem";



const URL_GET_PRODUCTS = 'https://dummyjson.com/products';
const URL_SEARCH_PRODUCTS = searchText => `https://dummyjson.com/products/search?q=${searchText}`;

const readProducts = async (searchText) => {
    try {
        const response = await fetch(searchText ? URL_SEARCH_PRODUCTS(searchText) : URL_GET_PRODUCTS);
        const productData = await response.json();
        return productData.products;
    } catch (error) {
        console.log('error');
    }
}

const ProductList = () => {

    const [productList, setProductList] = useState([]);
    const [displayedProductList, setDisplayedProductList] = useState([]);
    const [searchText, setSearchText] = useState('');

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

    useEffect(() => {
        readProducts()
            .then((_productList) => {
                setProductList(_productList);
                setDisplayedProductList(_productList);
            })
    }, []);

    const _onPress_Search = () => {
        // API'den arama
        /*
        readProducts(searchText)
            .then((productList) => {
                setProductList(productList);
            })
            */

        const filteredProductList = productList.filter((item) => {
            return item.title?.includes(searchText);
        })

        setDisplayedProductList(filteredProductList);
    }

    const _onPress_Cancel = () => {
        setSearchText('');
        setDisplayedProductList(productList);
    }

    const _onPress_Item = useCallback((itemId) => {
        console.log('length', displayedProductList.length);
        console.log('pressed on:' + itemId);
    }, [displayedProductList.length]);

    const _renderItem = ({item}) => {
        return <ProductItem product={item} onPress={_onPress_Item} />
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Arama metni yaz"
                        value={searchText}
                        onChangeText={setSearchText}
                        autoCapitalize="none" />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={_onPress_Search}>
                        <Text>Ara</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={_onPress_Cancel}>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={displayedProductList}
                    renderItem={_renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={() => {
                        return <Text>Ürün bulunamadı</Text>
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: measure(15),
        paddingTop: measure(15),
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: measure(15),
        justifyContent: 'space-between',
    },
    textInput: {
        backgroundColor: 'lightgray',
        height: measure(30),
        paddingLeft: measure(10),
        paddingRight: measure(10),
        width: measure(250),
        // flexGrow: 1, // Parent çocuklarını yerleştirdikten sonra kalan tüm alanı bana ver. 1 = 100% = tamamı. 0.4 => %40'ını bana ver
        // flexShrink: 1, // Parent çocuklarını yerleştirdikten sonra, taşma miktarının tümünü benden kes.
    },
    button: {
        height: measure(30),
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: measure(10),
        // marginLeft: measure(10),
        width: measure(50),
    },
    cancelButton: {
        height: measure(30),
        width: measure(10),
        backgroundColor: 'red',
    }
});

export default ProductList;
