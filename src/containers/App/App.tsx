import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled, { injectGlobal } from "styled-components";

import { RootState } from "../../store";
import UsersPage from "../../components/UsersPage";
import UserModel from "../../model/userModel";
import { requestUsers } from "./appActions";

interface AppProps {
  className?: string;
  users: ReadonlyArray<UserModel>;
  requestUsers: typeof requestUsers;
}

class App extends React.Component<AppProps> {

  componentWillMount() {
    this.props.requestUsers();
  }

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

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(StyledApp);
