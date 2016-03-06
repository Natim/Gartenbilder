import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import DeleteIcon from 'material-ui/lib/svg-icons/action/delete';
import IconButton from 'material-ui/lib/icon-button';

export default function ListImages(props) {
  const images = props.images.filter((image) => image.attachment);
  const nbImages = images.length;
  let nbCol, maxMod = 0;
  [3, 4, 5].forEach(col => {
    const mod = nbImages % col || 10;
    if (mod >= maxMod) {
      maxMod = mod;
      nbCol = col;
    }
  });

  return (
    <div id="grid">
      <GridList cellHeight={300} cols={nbCol} id="gridList">{
        images.map((image, index) => {
          return (
            <GridTile key={index}
                      title={image.from.first_name}
                      actionIcon={<IconButton><DeleteIcon color="white"/></IconButton>}>
              <img src={image.attachment.location} />
            </GridTile>
          )
        })
      }</GridList>
    </div>
  );
}
