import ReactDOM from "react-dom";
import App from "./App";
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';


const client = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: true,
    },
  },
})

ReactDOM.render(<QueryClientProvider client={client}><App /></QueryClientProvider>, document.getElementById("root"));