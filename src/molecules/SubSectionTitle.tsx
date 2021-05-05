import React from 'react';
import './SubSectionTitle.scss';

type Props = {
  main: string
}

export default class SubSectionTitle extends React.Component<Props> {
  render() {
    return (
      <div className='subSectionTitle__container'>
        <p className='subSectionTitle__main'>{ this.props.main }</p>
      </div>
    );
  }
}
