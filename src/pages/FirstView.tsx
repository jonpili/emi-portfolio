import React from 'react';
import './FirstView.scss';

import { Container } from '@material-ui/core';

export default class FirstView extends React.Component {
  render() {
    return (
      <div id="first-view" className='firstView__container'>
        <Container maxWidth="md">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="olive" width="100%"/>
        </Container>
      </div>
    );
  }
}
