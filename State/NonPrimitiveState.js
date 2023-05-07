import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { measure } from '../Metrics';
import { useRef, useState } from "react";

/**
 * 1. render:
 * noteList = [] (ab125c5)
 * onPress:
 * - noteList'i güncelledik, ['abc'] oldu. Hala ab125c5 referens değerine sahip ve içinde bir eleman var.
 * - setNoteList(['abc']) yaptık.
 * React şuna bakıyor. 
 * - Önceki değer: ab125c5 referans değerli, içinde ['abc'] olan bir array.
 * - Sonraki değer: ab125c5 referans değerli, içinde ['abc'] olan bir array.
 * - O zaman değişikliğee gerek yok.
 * 
 * 
 */

const NonPrimitiveState = () => {

    const [noteList, setNoteList] = useState([]);
    const [form, setForm] = useState({});
    const noteRef = useRef();

    const _onChangeText_Note = (text) => {
        noteRef.current = text;
    }

    const _onChangeText = (text, key) => {
        const copyForm = {...form};
        copyForm[key] = text;
        setForm(copyForm);
    }

    const _onPress_Add = () => {
        /**
         * React'ta state'te non-primitive değer varsa,
         * doğrudan state'teki değeri güncellersek ekran güncellenmez.
         * Çünkü referans değer aynı kalır.
         * Referans değeri değiştirmek için, non-primitive değeri kopyalamak gerekiyor.
         * Güncelleme bu kopya yapılıp, state'e bu kopya setlenir.
         */
        const copyNoteList = [...noteList];
        copyNoteList.push(noteRef.current);
        setNoteList(copyNoteList);
    }

    console.log(noteList);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Not ekle"
                    onChangeText={_onChangeText_Note}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Miktar ekle"
                    onChangeText={(text) => _onChangeText(text, 'amount')}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={_onPress_Add}
                >
                    <Text>Ekle</Text>
                </TouchableOpacity>
                <FlatList
                    data={noteList}
                    renderItem={({ item }) => {
                        return <Text>{item}</Text>
                    }}
                    keyExtractor={(item, index) => index}
                />
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

export default NonPrimitiveState;
