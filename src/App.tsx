import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import 'antd/dist/antd.css';
import GlobalStyle from './styles/global';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
  );
}

export default App;
