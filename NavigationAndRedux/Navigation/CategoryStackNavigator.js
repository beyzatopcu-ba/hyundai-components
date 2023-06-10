import { createStackNavigator } from '@react-navigation/stack';
import CategoryListScreen from '../Screens/CategoryListScreen';
import CategoryProductListScreen from '../Screens/CategoryProductListScreen';
import HeaderStyles from './styles/HeaderStyles';
import { headerOptions } from './Constants/HeaderOptions';

const CategoryStack = createStackNavigator();

const CategoryStackNavigator = () => {
    return (
        <CategoryStack.Navigator>
            <CategoryStack.Screen
                name='CategoryListScreen'
                component={CategoryListScreen}
                options={{
                    title: 'Kategoriler',
                    ...headerOptions,
                }}
            />
            <CategoryStack.Screen
                name='CategoryProductListScreen'
                component={CategoryProductListScreen}
                options={{
                    title: 'Kategori Ürünleri',
                    ...headerOptions,
                }}
            />
        </CategoryStack.Navigator>
    );
};

export default CategoryStackNavigator;
