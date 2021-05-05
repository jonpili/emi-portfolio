import React from 'react';
import './Title.scss';

type Props = {
  main: string
  sub: string
}

export default class Title extends React.Component<Props> {
  render() {
    return (
      <div className='title__container'>
        <p className='title__main'>{ this.props.main }</p>
        <p className='title__sub'>{ this.props.sub }</p>
      </div>
    );
  }
}
