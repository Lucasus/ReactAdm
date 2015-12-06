interface ButtonComponentState {
    counter: number;
}

class ButtonComponent extends React.Component<{}, ButtonComponentState> {

    constructor(props, context) {
        super(props, context);
        this.state = {counter: 0}
    }

    onClickHandler = () => {
        this.setState({counter: this.state.counter + 1});
    };

    render() {
        return (
            <button onClick={this.onClickHandler}>
                {this.state.counter}
            </button>
        )
    }
}
export = ButtonComponent;