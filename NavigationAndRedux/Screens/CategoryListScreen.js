import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { readCategories } from "../Services/ReadCategories";

import styles from './styles/CategoryListScreenStyles';

const CategoryListScreen = (props) => {
    // console.log('rendering CategoryListScreen');

    // useEffect(() => {
    //     console.log('mounted: CategoryListScreen');

    //     return () => {
    //         console.log('unmounting: CategoryListScreen');
    //     };
    // }, []);

    // Başka bir sekmeye zıplama
    // const _onPress_GoToAllProducts = () => {
    //     props.navigation.jumpTo('AllProducts');
    // }

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        readCategories().then((res) => {
            setCategoryList(res);
        })
    }, []);



    const _renderCategoryItem = ({ item }) => {
        /** @type {import("../Services/ReadCategories").CategoryItem} */
        const categoryItem = item;

        const _onPress_GoToCategoryProducts = () => {
            props.navigation.navigate('CategoryProductListScreen', {
                categoryTitle: categoryItem.title,
            });
        }

        return (
            <TouchableOpacity 
                style={styles.categoryItemTouchable}
                onPress={_onPress_GoToCategoryProducts}>
                <Text
                    numberOfLines={1}
                    style={styles.categoryItemTitleText}>
                    {categoryItem.title}
                </Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={categoryList}
                renderItem={_renderCategoryItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default CategoryListScreen;
