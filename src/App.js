import { ChakraProvider } from '@chakra-ui/react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

import './App.css';

const gitHubAPIClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={gitHubAPIClient}>
          <ChakraProvider>
            <div className="App">
                Hello there
            </div>  
          </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
