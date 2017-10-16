import * as React from "react";
import Users from "./components/Users";
import styled from "styled-components";
import { injectGlobal } from "styled-components";
import "./App.css";

interface AppProps {
  className?: string;
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className={this.props.className}>
        <Users />
      </div>
    );
  }
}

// tslint:disable-next-line
injectGlobal`
* { margin: 0; padding: 0; }
`;

const StyledApp = styled(App)`
  width: 100vw;
  height: 100vh;
  background: white;
`;

export default StyledApp;
