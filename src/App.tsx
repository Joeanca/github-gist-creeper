import { ChakraProvider, theme, CSSReset, Container } from '@chakra-ui/react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import React, { useState } from 'react';

import { TokenContext } from './context/token-context';
import SearchBox from './components/form/searchbox';
import TokenBox from './components/form/tokenbox';
import LandingLayout from './components/layouts/landing/landing-layout';
import GistContainer from './components/gist/gist-container';
import { UserContextProvider } from './context/user-context';

const gitHubAPIClient = new QueryClient();

const initialToken = process.env.REACT_APP_TOKEN || '';

function App() {
  const [token, setToken] = useState(initialToken);

  return (
    <TokenContext.Provider value={{
      token, setToken
    }}>
      <UserContextProvider userDataInitial=''>
        <QueryClientProvider client={gitHubAPIClient}>
            <ChakraProvider theme={theme}>
              <CSSReset />
              <Container h='100%' w='100%' >
                <LandingLayout>
                  {/* showing context use */}
                  <TokenBox />
                  <SearchBox />
                  <GistContainer />
                </LandingLayout>  
              </Container>
            </ChakraProvider>
        </QueryClientProvider>
      </UserContextProvider>
    </TokenContext.Provider>
  );
}

export default App;
