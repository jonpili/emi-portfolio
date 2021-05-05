import React from 'react';
import './FirstView.scss';

import { Container } from '@material-ui/core';

export default class FirstView extends React.Component {
  render() {
    return (
      <div id="first-view" className='firstView__container'>
        <Container maxWidth="md">
          <div className='firstView__image'>
            <img src={`${process.env.PUBLIC_URL}/logo-long.png`} alt="olive" width="100%" />
          </div>
        </Container>
      </div>
    );
  }
}
