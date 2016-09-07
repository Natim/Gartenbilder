import React from 'react';
import KintoClient from "kinto-http";
import AppBar from 'material-ui/lib/app-bar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

import Dropzone from "react-dropzone";

import ListImages from './ListImages';
import settings from '../settings';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      records: [],
      files: [],
    };
  }

  componentDidMount() {
    const kinto = new KintoClient(settings.SERVER);
    const album = kinto.bucket(settings.BUCKET).collection(settings.COLLECTION);
    return album.listRecords().then((records) => {
      this.setState({
        records: records.data
      });
    });
  }

  addImages(files) {
    this.setState({
      ...this.state,
      files: files
    });
    console.log(this.state);
    console.log("addImages", files);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="GartenBilder" />
        <Dropzone className="dropzone" onDrop={this.addImages} accept="image/*">Try dropping some files here, or click to select files to upload.</Dropzone>
        {this.state.files.length > 0 ? <div>
                <h2>Uploading {this.state.files.length} files...</h2>
                <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
                </div> : null}
          <ListImages images={this.state.records} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
