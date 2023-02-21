import { ChakraProvider, theme, CSSReset, Container } from '@chakra-ui/react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import React, { useState } from 'react';

import './App.css';
import { AppContext } from './context/app-context';
import SearchBox from './components/form/searchbox';
import TokenBox from './components/form/tokenbox';
import LandingLayout from './components/layouts/landing/landing-layout';
import GistContainer from './components/gist/gist-container';
import testdata from './test/api-test-data.json';

const gitHubAPIClient = new QueryClient();

const initialToken = process.env.REACT_APP_TOKEN || '';

function App() {
  const [token, setToken] = useState(initialToken);
  return (
    <AppContext.Provider value={[token, setToken]}>
      <QueryClientProvider client={gitHubAPIClient}>
          <ChakraProvider theme={theme}>
            <CSSReset />
            <Container h='100%' w='100%' >
              <LandingLayout>
                <TokenBox />
                <SearchBox />
                <GistContainer userData={testdata.data}/>
              </LandingLayout>  
            </Container>
          </ChakraProvider>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
