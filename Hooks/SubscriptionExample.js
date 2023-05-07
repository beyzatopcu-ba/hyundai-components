import { useEffect, useState } from "react"
import { Text, TouchableOpacity, View, Keyboard, TextInput } from "react-native";

const DummyText = () => {

    useEffect(() => {
        console.log('mounted');
        return () => {
            console.log('unmounting');
        }
    }, []);

    useEffect(() => {
        console.log('subscribing');
        const subscription = Keyboard.addListener('keyboardWillHide', () => {
            console.log('keyboard hidden');
        })

        return () => {
            console.log('removing subscription');
            subscription.remove();
        };
    }, [])

    return <Text>Bla</Text>
}

const SubscriptionExample = () => {

    const [count, setCount] = useState(0);

    return (
        <View style={{flex: 1, marginTop: 200}}>
            <TextInput style={{width: 200, height: 50, backgroundColor: 'pink'}} />
            <TouchableOpacity onPress={() => setCount(prev => prev + 1)}>
                <Text>Arttır</Text>
            </TouchableOpacity>
            {
                count % 3 === 0 ? 
                null : 
                <DummyText />
            }
        </View>
    )
}

// Örnek debounce'lu arama kodu
// searchText: kullanıcının yazdığı
// debouncedSearchText: aramsı yapılacak metin
/*
useEffect(() => {
    new Promise((resolve, reject) => {
        refDebounceTimer.current = setTimeout(() => {
            resolve();
        }, 500);
    }).then(() => {
        setDebouncedSearchText(state.searchText);
    });

    return () => {
        clearTimeout(refDebounceTimer.current);
    };
}, [state.searchText]);
*/

export default SubscriptionExample;