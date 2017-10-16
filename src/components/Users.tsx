import * as React from "react";
import User from "./User";

/* Example of fully typed class component */
class Users extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div className="App">        
          <User active={false} />
      </div>
    );
  }
}

export default Users;