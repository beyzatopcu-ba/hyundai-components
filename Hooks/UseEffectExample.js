import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { measure } from '../Metrics';
import { useEffect, useRef, useState } from "react";

const NoteForm = (props) => {

    const noteRef = useRef('abc');
    const [id, setId] = useState();

    useEffect(() => {
        // console.log('NoteForm mounted')
    }, []);

    /**
     * noteRef stateful olmadığı için bu effect (ve alttaki) sadece mountta çalışır.
     * Ancak noteRef veya noteRef.current değeri değiştikçe çalışmaz.
     */
    useEffect(() => {
        // console.log('note ref değişti');
    }, [noteRef]);

    useEffect(() => {
        // console.log('note ref current değişti');
    }, [noteRef.current]);

    useEffect(() => {
        console.log('setting id to', props.nextId);
        setId(props.nextId);

        return () => {
            console.log('cleanup');
        }
    }, [props.nextId]);

    const _onChangeText_Note = (text) => {
        noteRef.current = text;
    }

    const _onChangeText_Id = (text) => {
        setId(text);
    }

    const _onPress_Add = () => {
        props.onPress_Add({
            id: id,
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
                value={id?.toString() || ''}
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


const UseEffectExample = () => {

    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        // console.log('UseEffectExample mounted')
    }, []);

    useEffect(() => {
        /** Dependency array'deki değerlerden biri değiştikten sonra çağırılır. 
         * İçinde yeni değere sahip olurum. 
         */
        // console.log('noteList changed', noteList);
    }, [noteList]);

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
                    nextId={noteList.length + 1}
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

export default UseEffectExample;
