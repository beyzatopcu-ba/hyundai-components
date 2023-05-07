import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { measure } from '../Metrics';
import { useRef, useState } from "react";

const NoteForm = (props) => {

    const noteRef = useRef('abc');
    const idRef = useRef(5);
    const schoolNo = { current: 123 };

    const _onChangeText_Note = (text) => {
        noteRef.current = text;
    }

    const _onChangeText_Id = (text) => {
        idRef.current = text;
    }

    const _onPress_Add = () => {
        props.onPress_Add({
            id: idRef.current,
            note: noteRef.current,
        });
    }

    return (
        <>
            <TextInput
                style={styles.textInput}
                placeholder="Not"
                onChangeText={_onChangeText_Note}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Id"
                onChangeText={_onChangeText_Id}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={_onPress_Add}
            >
                <Text>Ekle</Text>
            </TouchableOpacity>
        </>
    );
}


const PropsExample2 = () => {

    const [noteList, setNoteList] = useState([]);

    const _onPress_Add = (note) => {
        const copyNoteList = [...noteList];
        copyNoteList.push(note);
        setNoteList(copyNoteList);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <NoteForm
                    onPress_Add={_onPress_Add}
                />
                <FlatList
                    data={noteList}
                    renderItem={({ item }) => {
                        return <Text>{item.note}</Text>
                    }}
                    keyExtractor={(item, index) => item.id}
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

export default PropsExample2;
