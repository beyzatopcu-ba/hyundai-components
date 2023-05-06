import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

let count = 1;
const MultipleState = () => {

    const [color, setColor] = useState('lightgreen');
    const [buttonText, setButtonText] = useState('Metin');

    console.log('rendering')
    

    const _onPress_Toggle = () => {
        if (color === 'lightgreen') {
            setColor('lightblue');
        }
        else {
            setColor('lightgreen');
        }

        setButtonText(buttonText.substring(0, buttonText.length - 1));
    }

    const _onPress_InsertText = () => {
        const newText = buttonText + count.toString();
        count++;
        setButtonText(newText);
    }

    const _renderSecondButton = () => {
        if (buttonText.length > 15) {
            return null;
        }

        return (
            <TouchableOpacity
                style={[styles.touchable, {
                    backgroundColor: color,
                }]}
                onPress={_onPress_InsertText}
            >
                <Text>{buttonText}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.touchable, {
                    backgroundColor: color,
                }]}
                onPress={_onPress_Toggle}
            >
                <Text>Rengi değiştir</Text>
            </TouchableOpacity>

            {
                buttonText.length > 10 ?
                    null
                    :
                    <TouchableOpacity
                        style={[styles.touchable, {
                            backgroundColor: color,
                        }]}
                        onPress={_onPress_InsertText}
                    >
                        <Text>{buttonText}</Text>
                    </TouchableOpacity>
            }
            {_renderSecondButton()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 20,
    }
});

export default MultipleState;
