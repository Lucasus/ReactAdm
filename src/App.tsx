import * as React from "react";
import { connect } from "react-redux";
import styled, { injectGlobal } from "styled-components";
import { RootState } from "./store";
import UsersPage from "./containers/UsersPage/UsersPage";
import { UserModel } from "./model/userModel";
import "./App.css";

interface AppProps {
  className?: string;
  users: UserModel[];
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className={this.props.className}>
        <UsersPage users={this.props.users} />
      </div>
    );
  }
}

// tslint:disable-next-line
injectGlobal`
* { margin: 0; padding: 0; }
`;

const StyledApp = styled(App) `
  width: 100vw;
  height: 100vh;
  background: white;
`;

const mapStateToProps = (state: RootState) => ({
  users: state.users
});

export default connect(mapStateToProps)(StyledApp);
