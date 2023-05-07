import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ButtonText = () => {
    console.log('rendering button text');

    return (
        <Text>Rengi değiştir</Text>
    )
}

const requestData = async () => {
    console.log('requesting data');
    return '';
}

const FirstExample = () => {

    console.log('rendering');

    const [color, setColor] = useState('lightgreen');
    // const colorValue = colorState[0];
    // const setColor = colorState[1];

    

    const _onPress_Toggle = () => {
        if (color === 'lightgreen') {
            setColor('lightblue');
        }
        else {
            setColor('lightgreen');
        }

        setColor(prev => {
            return prev === 'lightgreen' ? 'lightblue' : 'lightgreen';
        })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.touchable, {
                    backgroundColor: color,
                }]}
                onPress={_onPress_Toggle}
            >
                <ButtonText />
            </TouchableOpacity>
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

export default FirstExample;
