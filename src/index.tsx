import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Sample } from 'components/sample';
import { List } from 'components/list';
import { ButtonComponent } from "components/button";


class App extends React.Component<{}, {}> {
    render() {
        return (<div>
            <ButtonComponent />
            <Sample content="xyzz"/>
            <List />
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById("root"));