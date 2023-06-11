import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7EAED',
        paddingHorizontal: 15,
    },
    cartProductItemContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    productTitleText: {
        flexGrow: 1,
    },
    countButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonTouchable: {
        paddingHorizontal: 10,
        backgroundColor: '#3E22EA',
        marginHorizontal: 10,
        height: 30,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
    },
    countText: {

    },
});
