import React from 'react';
import './Works.scss';

import SectionTitle from '../molecules/SectionTitle';

import { GridList, GridListTile } from '@material-ui/core';

type Tile = {
  img: string
  title: string
  cols?: number
  rows?: number
}

type Props = {
}

type State = {
  tileData: Tile[]
}

export default class Works extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tileData: [
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive1', cols: 2, rows: 2 },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive2', rows: 2 },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive3', rows: 2 },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive4' },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive5' },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive6' },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive7' },
      ]
    };
  }

  render() {
    return (
      <div id="works" className='works__container'>
        <SectionTitle main="Works" />
        <div className='works__contents'>
          <GridList cellHeight={240} cols={4}>
            {this.state.tileData.map((tile: Tile) => (
              <GridListTile key={tile.title} cols={tile.cols || 1} rows={tile.rows || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}
