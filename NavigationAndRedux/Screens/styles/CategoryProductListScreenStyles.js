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
});
