import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryListScreen from '../Screens/CategoryListScreen';
import CartScreen from '../Screens/CartScreen';
import { measure } from '../../Metrics';
import { Text } from 'react-native';
import CategoryStackNavigator from './CategoryStackNavigator';
import HeaderStyles from './styles/HeaderStyles';
import { headerOptions } from './Constants/HeaderOptions';

const Tabs = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                // Custom tab bar label da verilebilir
                // tabBarLabel: (props) => {
                //     console.log(props);
                //     return (
                //         <Text>label</Text>
                //     )
                // },
                tabBarIcon: () => null,
                tabBarLabelStyle: {
                    marginBottom: measure(10),
                    fontSize: measure(12),
                    fontWeight: 600,
                },
                headerShown: false,
                tabBarActiveTintColor: '#3E22EA',
                tabBarInactiveTintColor: '#8F8F8F',
                
            }}
            >
            {/* Kategoriler */}
            <Tabs.Screen 
                name='CategoryStack'
                component={CategoryStackNavigator}
                options={{
                    title: 'Kategoriler'
                }}
                 /> 
            {/* Tüm ürünler */}
            <Tabs.Screen
                name='CartScreen'
                component={CartScreen}
                options={{
                    title: 'Sepetim',
                    ...headerOptions,
                }} /> 
        </Tabs.Navigator>
    );
}

export default MainTabNavigator;
