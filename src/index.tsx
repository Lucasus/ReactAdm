import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const store: Store<any> = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
