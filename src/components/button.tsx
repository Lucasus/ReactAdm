interface ButtonComponentState {
    counter: number;
}

class ButtonComponent extends React.Component<{}, ButtonComponentState> {

    constructor(props, context) {
        super(props, context);
        this.state = {counter: 0};
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        debugger;
        this.setState({counter: this.state.counter + 3});
    };

    render() {
        return (
            <button onClick={this.onClickHandler}>
                {this.state.counter}
            </button>
        )
    }
}
export default ButtonComponent;