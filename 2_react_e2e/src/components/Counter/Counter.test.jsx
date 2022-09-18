import {render, screen} from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Counter test', () => {
    test('Test router', async () => {
        //у объекта render, тоже есть методы как у screen
        const {getByTestId} = renderTestApp(null, {
            route: '/',
            initialState: {
                counter: {value: 10}
            }
        })

        const incrementButton = getByTestId('increment-btn')
        //expect(getByTestId('value-title')).toHaveTextContent('0')
        expect(getByTestId('value-title').textContent).toBe('10')
        await userEvent.click(incrementButton)
        //expect(getByTestId('value-title')).toHaveTextContent('11')
        expect(getByTestId('value-title').textContent).toBe('11')
    })
})