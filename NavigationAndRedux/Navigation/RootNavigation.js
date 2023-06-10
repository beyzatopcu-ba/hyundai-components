import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    );
}

export default RootNavigation;