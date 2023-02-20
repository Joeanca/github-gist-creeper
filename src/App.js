import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

import './App.css';

const gitHubAPIClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={gitHubAPIClient}>
      <div className="App">
      </div>
    </QueryClientProvider>
  );
}

export default App;
