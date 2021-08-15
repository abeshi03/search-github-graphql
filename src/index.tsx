import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/importOnly.scss";
import client from "./client";
import {ApolloProvider} from "@apollo/client";
import {SearchGithubQueryProvider} from "./providers/SearchGithubQueryProvider";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SearchGithubQueryProvider>
        <App />
      </SearchGithubQueryProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
