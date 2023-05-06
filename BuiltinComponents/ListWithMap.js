import { Text } from "react-native";
import { products } from "./Data";

const ListWithMap = () => {

    /* For loop ile liste render etme
    const ComponentList = [];
    for (let product of products) {
        ComponentList.push(<Text key={product.id}>{'Title: ' + product.title}</Text>);
    }

    return ComponentList;
    */

    // Array.map ile liste render etme
    return products.map((product, index) => {
        return (
            <Text key={product.id}>{product.title}</Text>
        )
    });
}

export default ListWithMap;
