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
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive', cols: 2, rows: 2 },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive', rows: 2 },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive', rows: 2 },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive' },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive' },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive' },
        { img: 'https://material-ui.com/static/images/grid-list/olive.jpg', title: 'olive' },
      ]
    };
  }

  render() {
    return (
      <div className='works__container'>
        <SectionTitle main="Works" />
        <div className='works__contents'>
          <GridList cellHeight={240} cols={4}>
            {this.state.tileData.map((tile: Tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}
