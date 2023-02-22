import { createContext } from 'react'
interface TokenContent {
  token: string,
  setToken: (token: string) => void,
}
export const TokenContext = createContext<TokenContent>({
  token: '',
  setToken: () => {}
});
