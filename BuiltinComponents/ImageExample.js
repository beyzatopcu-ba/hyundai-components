import { Image, StyleSheet, View } from "react-native";
import { measure } from "../Metrics";

const ImageExample = () => {

    return (
        <>
            <View style={styles.imageContainer}>
                {/* Projedeki bir görseli verme */}
                <Image
                    source={require('../an-image.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.imageContainer}>
                {/* URL'deki bir görseli verme */}
                <Image
                    source={{
                        uri: 'https://dummyimage.com/600x400/000/fff',
                    }}
                    style={styles.image}
                />
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    imageContainer: {
        width: measure(200),
        height: measure(200),
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default ImageExample;