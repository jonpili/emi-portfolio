import React from 'react';
import './SectionTitle.scss';

type Props = {
  main: string
  sub?: string
}

export default class SectionTitle extends React.Component<Props> {
  render() {
    return (
      <div className='sectionTitle__container'>
        <p className='sectionTitle__main'>{ this.props.main }</p>
        <p className='sectionTitle__sub'>{ this.props.sub }</p>
      </div>
    );
  }
}
