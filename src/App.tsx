import React from 'react';
import './App.css';

import Header from './organisms/Header';
import FirstView from './pages/FirstView';
import Profile from './pages/Profile';
import JobWorks from './pages/JobWorks';
import HobbyWorks from './pages/HobbyWorks';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <FirstView />
          <Profile />
          <JobWorks />
          <HobbyWorks />
        </main>
      </div>
    );
  }
}

export default App;
