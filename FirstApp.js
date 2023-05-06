// import React from 'react'; // Bare React projelerinde JSX kullanmak için zorunlu import
import { Keyboard, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TouchableExample from './BuiltinComponents/Buttons';
import ImageExample from './BuiltinComponents/ImageExample';
import { measure } from './Metrics';
import TextInputExample from './BuiltinComponents/TextInputExample';
import ScrollViewExample from './BuiltinComponents/ScrollViewExample';
import FlatListExample from './BuiltinComponents/FlatListExample';
import ListWithMap from './BuiltinComponents/ListWithMap';


/**
 * RN'deki stil tipleri:
 * ViewStyle
 * ImageStyle
 * TextStyle
 */

const text = 'hello';

export default function App() {
  return (
    // <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <View style={{
        backgroundColor: 'lightgreen',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      }}>
        <SafeAreaView>
          <View style={{justifyContent: 'center', alignItems: 'center', height: 50}}>
            <Text>BAŞLIK</Text>
          </View>
        </SafeAreaView>
      </View>
      <FlatListExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: measure(15), // Responsive boyut
    // paddingTop: measure(50),
  },
  containerYellow: {
    backgroundColor: 'lightblue',
  },
  text: {
    color: 'green',
    fontSize: measure(14),
  }
});
