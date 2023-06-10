import { StyleSheet } from "react-native";
import { measure } from '../../../Metrics';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7EAED',
        padding: measure(15),
    },
    flatList: {
        flex: 1,
    },
    categoryItemTouchable: {
        height: measure(50),
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: measure(10),
        borderColor: '#C3C3C3',
        borderWidth: 1,
        paddingHorizontal: measure(15),
        marginVertical: measure(5),
    },
    categoryItemTitleText: {
        fontSize: measure(20),
        fontWeight: 600,
    },
});
