import * as React from "react";
import User from "../../components/User";

interface UsersProps {
  users: string[];
}

/* Example of fully typed class component */
class Users extends React.Component<UsersProps> {
  constructor(props: UsersProps) {
    super(props);
  }

  public render() {
    return (
      <div className="App"> 
        {this.props.users.map(user => <User key={user} name={user} />)}
      </div>
    );
  }
}

export default Users;