import * as React from "react";
import Users from "./components/Users";
import styled from "styled-components";
import { injectGlobal } from "styled-components";
import "./App.css";

injectGlobal`
* { margin: 0; padding: 0; }
`;

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

const StyledApp = styled(App)`
  width: 100vw;
  height: 100vh;
  background: white;
`;

export default StyledApp;
