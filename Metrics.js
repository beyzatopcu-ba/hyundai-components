import { Dimensions } from "react-native";

// React Native'de hem kolaylık hem de responsiveness için kullanılan yöntem
const dimensions = Dimensions.get('window');
const designWidth = 428; // Tasarım dosyasındaki ekranların eni
export const measure = (size) => (size / designWidth) * dimensions.width;