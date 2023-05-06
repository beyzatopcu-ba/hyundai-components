import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { products } from "./Data";
import { measure } from "../Metrics";

const ItemSeparatorComponent = () => {
    return (
        <View style={styles.separator}/>
    )
};

const ListEmptyComponent = () => {
    return (
        <View>
            <Text>Ürün bulunmuyor</Text>
        </View>
    )
};

const FlatListExample = () => {

    const _renderProductItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <Text>{item.title}</Text>
            </View>
        );
    }

    return (
        <FlatList
            // key={'flatlist2'}
            data={products}
            renderItem={_renderProductItem}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListEmptyComponent={ListEmptyComponent}
            getItemLayout={(data, index) => (
                {length: measure(30), offset: measure(30) * index, index}
              )}
            showsVerticalScrollIndicator={false}
            // initialScrollIndex={10}
            inverted={false}
            numColumns={2}
            columnWrapperStyle={{
                justifyContent: 'space-around',
            }}
        />
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        height: measure(30),
        justifyContent: 'center',
        width: 100,
    },
    separator: {
        height: measure(1),
        backgroundColor: 'rgb(200,200,200)',
        marginVertical: measure(5),
    }
})

export default FlatListExample;
