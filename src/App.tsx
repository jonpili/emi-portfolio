import React from 'react';
import './App.scss';

import Header from './organisms/Header';
import FirstView from './pages/FirstView';
import Profile from './pages/Profile';
import Works from './pages/Works';
import Hobby from './pages/Hobby';

import { Container } from '@material-ui/core';

class App extends React.Component {
  render() {
    return (
      <div className='app__container'>
        <header className='app__header'>
          <Container>
            <Header />
          </Container>
        </header>
        <main className='app__main'>
          <Container>
            <FirstView />
            <Profile />
            <Works />
            <Hobby />
          </Container>
        </main>
      </div>
    );
  }
}

export default App;
