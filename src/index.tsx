import Sample = require('components/sample');
import ButtonComponent = require("components/button");


class App extends React.Component<{}, {}> {
    render() {
        return <div><ButtonComponent /><Sample content="xyzz" /></div>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));