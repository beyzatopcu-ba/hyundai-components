import { StyleSheet } from 'react-native';
import { measure } from '../../../Metrics';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7EAED',
    },
    innerContainer: {
        flex: 1,
        borderRadius: measure(10),
        borderWidth: 1,
        borderColor: '#C3C3C3',
        backgroundColor: 'white',
        margin: measure(20),
        justifyContent: 'space-between',
    },
    productTitleText: {
        fontSize: measure(20),
        fontWeight: 600,
        padding: measure(15),
    },
    addTouchable: {
        height: measure(60),
        borderRadius: measure(10),
        backgroundColor: '#3E22EA',
        margin: measure(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    addText: {
        color: 'white',
        fontSize: measure(20),
        fontWeight: 500,
    },
});
