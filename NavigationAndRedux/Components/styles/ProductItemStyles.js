import { StyleSheet } from "react-native";
import { measure } from '../../../Metrics';

export default StyleSheet.create({
    productItemTouchable: {
        height: measure(50),
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: measure(10),
        borderColor: '#C3C3C3',
        borderWidth: 1,
        paddingHorizontal: measure(15),
        marginVertical: measure(5),
    },
    productItemTitleText: {
        fontSize: measure(18),
    },
});
