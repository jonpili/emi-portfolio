import React from 'react';
import './Hobby.scss';

import SectionTitle from '../molecules/SectionTitle';

import { Container, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

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

export default class Hobby extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tileData: [
        { img: `${process.env.PUBLIC_URL}/no-image.png`, title: 'nothing1', cols: 2, rows: 2 },
        { img: `${process.env.PUBLIC_URL}/no-image.png`, title: 'nothing2', rows: 2 },
        { img: `${process.env.PUBLIC_URL}/no-image.png`, title: 'nothing3', rows: 2 },
      ]
    };
  }

  render() {
    return (
      <div id="hobby" className='hobby__container'>
        <Container maxWidth="md">
          <SectionTitle main="Hobby" />
          <div className='hobby__contents'>
            <GridList cellHeight={228} cols={4}>
              {this.state.tileData.map((tile: Tile) => (
                <GridListTile key={tile.title} cols={tile.cols || 1} rows={tile.rows || 1}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Container>
      </div>
    );
  }
}
