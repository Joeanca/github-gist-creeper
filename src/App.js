import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import React, { useState } from 'react';

import './App.css';
import { AppContext } from './context/app-context';
import SearchBox from './components/form/searchbox';
import TokenBox from './components/form/tokenbox';
import LandingLayout from './components/layouts/landing/landing-layout';

const gitHubAPIClient = new QueryClient();


function App() {
  const [token, setToken] = useState('');
  console.log(token);
  return (
    <AppContext.Provider value={[token, setToken]}>
      <QueryClientProvider client={gitHubAPIClient}>
          <ChakraProvider theme={theme}>
            <CSSReset />
              <LandingLayout>
                <TokenBox />
                <SearchBox />
              </LandingLayout> 
          </ChakraProvider>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
