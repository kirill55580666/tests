import { render, screen } from '@testing-library/react';
import App from './App';
import {fireEvent} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

describe('TESTING APP', () => {

  test('renders learn react link 1', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i)
    const btn = screen.getByRole(/button/i)
    const input = screen.getByPlaceholderText(/input valu/i)
    expect(helloWorldElement).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input).toMatchSnapshot()
    //screen.debug()
  });

  test('renders learn react link 2', async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/hello2/i)
    // expect(helloWorldElem).toBeNull()
    screen.debug()
    const helloWorldElem = await screen.findByText(/data/i)
    expect(helloWorldElem).toBeInTheDocument()
    expect(helloWorldElem).toHaveStyle({color: 'red'});
    screen.debug()
  });

  test('ClICK EVENT', () => {
    render(<App/>)
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  })

  test("INPUT EVENT", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // Искуственное событие
    // fireEvent.input(input, {
    //   target: {value: '123123'}
    // })
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  })

})
