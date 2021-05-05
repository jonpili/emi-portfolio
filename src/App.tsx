import React from 'react';
import './App.scss';

import Header from './organisms/Header';
import FirstView from './pages/FirstView';
import About from './pages/About';
import Works from './pages/Works';
import Hobby from './pages/Hobby';

import { Container } from '@material-ui/core';

class App extends React.Component {
  render() {
    return (
      <div className='app__container'>
        <header className='app__header'>
          <Header />
        </header>
        <main className='app__main'>
          <FirstView />
          <Container>
            <About />
            <Works />
            <Hobby />
          </Container>
        </main>
      </div>
    );
  }
}

export default App;
