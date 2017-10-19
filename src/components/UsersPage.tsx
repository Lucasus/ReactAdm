import * as React from "react";
import User from "./User";
import { UserModel } from "../model/userModel";

interface UsersProps {
  users: UserModel[];
}

/* Example of fully typed class component */
class UsersPage extends React.Component<UsersProps> {
  constructor(props: UsersProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        {this.props.users.map(user => <User key={user.id} name={user.fullname} />)}
      </div>
    );
  }
}

export default UsersPage;