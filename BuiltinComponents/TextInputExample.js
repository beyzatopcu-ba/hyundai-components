import { StyleSheet, TextInput, View } from "react-native";
import { measure } from "../Metrics";

const TextInputExample = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                autoCapitalize="characters"
                autoFocus
                blurOnSubmit={true}
                editable={true}
                keyboardType="default"
                multiline
                onChangeText={(text) => {
                    console.log('yazıldı: ', text)
                }}
                placeholder="Buraya bir şey yaz"
                placeholderTextColor={'pink'}
                returnKeyType="search"
                returnKeyLabel="Label"
                value='Default değer'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'white',
        width: measure(300),
        borderRadius: measure(10),
    },
    input: {
        margin: measure(10),
    },
});

export default TextInputExample;
