import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const TouchableExample = () => {

    return (
        <TouchableOpacity 
            style={styles.touchableContainer}
            disabled={false}
            onPress={() => { 
                console.log('pressed'); 
            }}
            >
            <Text>Buraya dokun</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchableContainer: {
        height: 50,
        width: '50%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});

export default TouchableExample;
