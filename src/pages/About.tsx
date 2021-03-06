import React from 'react';
import './About.scss';

import SectionTitle from '../molecules/SectionTitle';
import SubSectionTitle from '../molecules/SubSectionTitle';

import { Container } from '@material-ui/core';

export default class About extends React.Component {
  render() {
    return (
      <div id="about" className='about__container'>
        <Container maxWidth="md">
          <SectionTitle main="About" />
          <div className='about__contents'>
            <div className='about__profile'>
              <SubSectionTitle main="Profile" />
              <div className='about__profileContents'>
                <div className='about__profileImage'>
                  <img src={`${process.env.PUBLIC_URL}/no-image.png`} alt="nothing" width="100%" />
                </div>
                <div className='about__profileText'>
                  <p>自己紹介文<br /><br />自己紹介文<br /><br />自己紹介文<br /><br />自己紹介文</p>
                </div>
              </div>
            </div>
            <div className='about__vision'>
              <SubSectionTitle main="Vision" />
            </div>
            <div className='about__studyRecord'>
              <SubSectionTitle main="Study Record" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
