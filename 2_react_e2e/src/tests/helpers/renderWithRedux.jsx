import {createReduxStore} from "../../store/store";
import {Provider} from "react-redux";

export const renderWithRedux = (component, initialState) => {
    const store = createReduxStore(initialState);

    return render(
        <Provider store={store}>
            {component}
        </Provider>
    )
}