import {BrowserRouter, MemoryRouter} from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import userEvent from "@testing-library/user-event";
import {render} from "@testing-library/react";

export const renderWithRouter = (component, initialRoute = '/') => {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )
}

// export const renderWithRouterAdvanced = (route = '/') => {
//     window.history.pushState({}, 'Test page', route)
//
//     return {
//         user: userEvent.setup(),
//         ...render(<AppRouter />, {wrapper: MemoryRouter}),
//     }
// }
