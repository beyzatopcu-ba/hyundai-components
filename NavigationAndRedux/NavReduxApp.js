import RootNavigation from "./Navigation/RootNavigation";
import { Provider } from 'react-redux';
import { store } from "./Redux";

const NavReduxApp = () => {
    return (
        <Provider store={store} >
            <RootNavigation />
        </Provider>
    );
}

export default NavReduxApp;