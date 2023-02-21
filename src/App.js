import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import React, { useState } from 'react';

import './App.css';
import { AppContext } from './context/app-context';
import SearchBox from './components/form/searchbox';
import TokenBox from './components/form/tokenbox';
import LandingLayout from './components/layouts/landing/landing-layout';
import GistContainer from './components/gist/gist-container';

const gitHubAPIClient = new QueryClient();

const initialToken = process.env.REACT_APP_TOKEN || '';

function App() {
  const [token, setToken] = useState(initialToken);
  console.log(token);
  return (
    <AppContext.Provider value={[token, setToken]}>
      <QueryClientProvider client={gitHubAPIClient}>
          <ChakraProvider theme={theme}>
            <CSSReset />
              <LandingLayout>
                <TokenBox />
                <SearchBox />
                <GistContainer />
              </LandingLayout> 
          </ChakraProvider>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
