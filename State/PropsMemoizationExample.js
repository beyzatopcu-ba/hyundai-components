import { Text, TextInput, TouchableOpacity, View, StyleSheet, SafeAreaView } from "react-native";
import { measure } from "../Metrics";
import React, { useState } from "react";

/**
 * @param {object} props
 * @param {string} props.inputValue
 * @param {(text: string) => void} props.onChangeInput
 */
const Input = (props) => {
    /**
     * Parent'ta bu state var. Orada hem button hem textinput o state'i kullanıyor.
     * Burada tekrar tanımlarsak hem işimiz zorlaşır, hem de gereksiz re-renderlar olur.
     */
    // const [inputText, setInputText] = useState('');
    return (
        <TextInput
            style={styles.textInput}
            placeholder="Metin gir"
            value={props.inputValue}
            onChangeText={props.onChangeInput} />
    )
}

const MyText = (props) => {
    console.log('rendering my text')
    return (
        <Text>{props.text}</Text>
    )
}

const propsAreEqual = (prevProps, nextProps) => {
    return prevProps.text === nextProps.text;
}

const MemoizedMyText = React.memo(MyText, propsAreEqual);


const PropsMemoizationExample = () => {

    const [text, setText] = useState('');

    const _onPress = () => {
        setText('Butona basıldı');
    }

    const _onChangeInput = text => {
        setText(text);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Input
                    inputValue={text}
                    onChangeInput={_onChangeInput}/>

                <TouchableOpacity
                    style={styles.button}
                    onPress={_onPress}>
                    <Text>Button</Text>
                </TouchableOpacity>
                <MemoizedMyText text={text?.substring(0, 3)} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: measure(15),
        paddingTop: measure(15),
    },
    textInput: {
        backgroundColor: 'lightgray',
        height: measure(30),
        paddingLeft: measure(10),
    },
    button: {
        marginTop: measure(10),
        height: measure(30),
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PropsMemoizationExample;
