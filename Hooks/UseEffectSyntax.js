import { useEffect } from "react";
import { Text } from "react-native";

const UseEffectExample = (props) => {

    const text = props.text;

    /**
     * No dependency array
     * İlk mount'ta ve sonraki her update'te çalışır. 
     */
    useEffect(() => {
        console.log('abcd')
    });

    /**
     * Empty dependency array
     * Sadece mount'ta çalışır.
     */
    useEffect(() => {
        console.log('mount')
    }, []);


    /**
     * Dolu dependency array
     * Bir kere mount'ta çalışır.
     * Sonra dependency array'deki değişkenlerin herhangi birinin değeri
     * her değiştiğinde yine çalışır.
     */
    useEffect(() => {
        console.log('text changed');
    }, [text]);

    return (
        <Text>Deneme</Text>
    );
}

export default UseEffectExample;
