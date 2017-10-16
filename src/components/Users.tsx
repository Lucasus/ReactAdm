import * as React from "react";
import User from "./User";

interface UsersState {
  users: string[];
}

/* Example of fully typed class component */
class Users extends React.Component<{}, UsersState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [
        "user 1",
        "user 2",
        "user 3"
      ]
    };
  }

  public render() {
    return (
      <div className="App"> 
        {this.state.users.map(user => <User key={user} name={user} />)}
      </div>
    );
  }
}

export default Users;