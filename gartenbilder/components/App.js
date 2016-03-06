import React from 'react';
import KintoClient from "kinto-client";
import AppBar from 'material-ui/lib/app-bar';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

import ListImages from './ListImages';
import {SERVER, BUCKET, COLLECTION} from '../settings';

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
    };
  }

  componentDidMount() {
    const kinto = new KintoClient(SERVER);
    const album = kinto.bucket(BUCKET).collection(COLLECTION);
    return album.listRecords().then((records) => {
      this.setState({
        records: records.data
      });
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="GartenBilder" />
          <ListImages images={this.state.records} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
