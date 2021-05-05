import React from 'react';
import './Header.scss';

import { Container, Link } from '@material-ui/core';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header__container'>
        <Container maxWidth="md">
          <div className='header__contents'>
            <div className='header__logo'>
              <Link href="#">
                <img src={`${process.env.PUBLIC_URL}/no-image.png`} alt="nothing" width="60px" height="60px" />
              </Link>
            </div>
            <div className='header__links'>
              <Link href="#about"><div className='header__link'>About</div></Link>
              <Link href="#works"><div className='header__link'>Works</div></Link>
              <Link href="#hobby"><div className='header__link'>Hobby</div></Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
