import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {offsetLimitPagination} from "@apollo/client/utilities";

const client = new ApolloClient({
    uri: 'https://71z1g.sse.codesandbox.io/', //'https://flyby-router-demo.herokuapp.com/'
    cache: new InMemoryCache({
        typePolicies : {
            Query: {
                fields: {
                    dogs: offsetLimitPagination()
                }
            }
        }
    }),
    defaultOptions: {
        watchQuery: {
            nextFetchPolicy: "cache-first"
        }
    }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
