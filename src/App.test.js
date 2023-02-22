import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { TokenContext } from './context/token-context';
import { UserContextProvider, useUserData, } from './context/user-context';

// Context tests
const customTokenRender = (ui, {providerProps, ...renderOptions}) => {
  return render(
    <TokenContext.Provider {...providerProps}>{ui}</TokenContext.Provider>,
    renderOptions,
  )
}

const customUserRender = (ui, {providerProps, ...renderOptions}) => {
  return render(
    <UserContextProvider {...providerProps}>{ui}</UserContextProvider>,
    renderOptions,
  )
}

test('TokenProvider can access token from value', () => {
  const providerProps = { value : {
      token: '12345'
    }
  }
  customTokenRender(
    <TokenContext.Consumer>
      {value => {
        return <span>Received: {value.token}</span>
      }}
    </TokenContext.Consumer>,
    {providerProps},
  )
  expect(screen.getByText(/^Received:/).textContent).toBe('Received: 12345')
});

test('UserContextProvider can render from custom hook', () => {
  const UserProvided = () => {
    const {userData} = useUserData();
    return <div>Received: {userData}</div>
  }
  const providerProps = { userDataInitial : '12345' }
  customUserRender(
    <UserProvided />,
    {providerProps},
  )
  expect(screen.getByText(/^Received:/).textContent).toBe('Received: 12345')
});

test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/User Gists Search/i);
  expect(linkElement).toBeInTheDocument();
});
