import React from 'react';
import ReactDOM from 'react-dom';
import { ChainId, Config, DAppProvider } from '@usedapp/core';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';

const CHAIN_ID: ChainId =
  +ChainId[+process.env.REACT_APP_CHAIN_ID!] || ChainId.Localhost;
const CHAIN_URL = process.env.REACT_APP_CHAIN_URL!;

const config: Config = {
  readOnlyChainId: CHAIN_ID,
  readOnlyUrls: {
    [CHAIN_ID]: CHAIN_URL,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
