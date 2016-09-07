import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import DeleteIcon from 'material-ui/lib/svg-icons/action/delete';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';

export default class ListImages extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);

    this.images = props.images.filter((image) => image.attachment);

    this.state = {
      open: false,
      selected: null
    };
  }

  componentWillReceiveProps(props) {
    this.images = props.images.filter((image) => image.attachment);
  }

  handleRequestClose() {
    this.setState({
      open: false,
      selected: null,
    });
  }

  handleTouchTap(image) {
    this.setState({
      open: true,
      selected: image,
    });
  }


  render() {
    const nbImages = this.images.length;
    let nbCol, maxMod = 0;
    [3, 4, 5].forEach(col => {
      const mod = nbImages % col || 10;
      if (mod >= maxMod) {
        maxMod = mod;
        nbCol = col;
      }
    });

    const standardActions = (
      <FlatButton
        label="Ok"
        secondary={true}
        onTouchTap={this.handleRequestClose}
      />
    );
  
    return (
      <div id="grid">
        <Dialog
          open={this.state.open}
          title={this.state.selected && this.state.selected.from.first_name}
          actions={standardActions}
          onRequestClose={this.handleRequestClose}
        >
          <img src={this.state.selected && this.state.selected.attachment.location} />
        </Dialog>
        <GridList cellHeight={300} cols={nbCol} id="gridList">{
          this.images.map((image, index) => {
            return (
              <GridTile key={index}
                        title={image.from.first_name}
                        actionIcon={<IconButton><DeleteIcon color="white"/></IconButton>}
                        onTouchTap={this.handleTouchTap.bind(this, image)}>
                <img src={image.attachment.location} />
              </GridTile>
            )
          }, this)
        }</GridList>
      </div>
    );
  }
}
