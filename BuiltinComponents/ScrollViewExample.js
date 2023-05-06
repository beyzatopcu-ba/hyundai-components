import { ScrollView, StyleSheet, Text, View } from "react-native";
import { measure } from "../Metrics";

const ScrollViewExample = () => {
    return (
        <View style={{height: measure(20), width: measure(200), marginVertical: 100}}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
                bounces={false}
                horizontal
                keyboardDismissMode="onDrag"
                scrollEnabled={false}
                
                >
                <View
                    onStartShouldSetResponder={() => true}
                    onStartShouldSetResponderCapture={() => true}
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                    <Text>Deneme</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scroll: {
        // height: measure(100),
    },
});


export default ScrollViewExample;
