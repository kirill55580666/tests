import userEvent from "@testing-library/user-event";

jest.mock('axios')

import Users from "./Users";
import axios from 'axios'

import { render, screen } from '@testing-library/react';
import React from "react";

import {renderWithRouter, renderWithRouterAdvanced} from "../../tests/helpers/renderWithRouter";

describe('USER COMPONENT TEST', () => {
    let response

    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                },
            ]
        }
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('test rendering components', async () => {
        axios.get.mockReturnValue(response);
        renderWithRouter(null, '/users')
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
    })

    test('test redirect to details page', async() => {
        axios.get.mockReturnValue(response);
        renderWithRouter(null, '/users')
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        await userEvent.click(users[1])
        expect(screen.getByTestId('user-page')).toBeInTheDocument();
        // await waitFor(() => expect(screen.getByTestId('user-page')).toBeInTheDocument())
        screen.debug();
    });

    // test('full app rendering/navigating', async () => {
    //     axios.get.mockReturnValue(response);
    //     const {user} = renderWithRouterAdvanced(<Users/>, '/users')
    //     const users = await screen.findAllByTestId('user-item');
    //     expect(users.length).toBe(3);
    //     await user.click(users[1])
    //     expect(screen.getByTestId('user-page')).toBeInTheDocument();
    // })
})