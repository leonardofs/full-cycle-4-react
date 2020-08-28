import React from 'react';

import './App.css';

import {
  AppContainer,
  Header,
  Content,
  TextHeader,
} from './styled';
import Routes from './routes';

function App() {
  return (
    <AppContainer>
      <Header>
        <TextHeader>Desafio 04 - Utilizando React.js</TextHeader>
      </Header>
      <Content>
        <Routes />
      </Content>
    </AppContainer>
  );
}

export default App;