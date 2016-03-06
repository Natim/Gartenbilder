import React from "react";
import { render } from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from "./components/App";
import "./styles.css";

// Needed for onTouchTap
// XXX: Can go away when react 1.0 release
injectTapEventPlugin();

render(<App />, document.getElementById("app"));
