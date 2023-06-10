import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import headerStyles from './styles/HeaderStyles';
import { headerOptions } from './Constants/HeaderOptions';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <MainStack.Screen
                name='MainTabs'
                component={MainTabNavigator}
            />
            <MainStack.Screen
                name='ProductDetailScreen'
                component={ProductDetailScreen}
                options={{
                    headerShown: true,
                    title: 'Ürün Detayı',
                    ...headerOptions,
                }}
            />
        </MainStack.Navigator>
    )
}

export default MainStackNavigator;
