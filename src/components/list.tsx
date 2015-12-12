import * as React from 'react';

interface ListState {
    messages: string[]
}

class List extends React.Component<{  }, ListState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            messages: [
                "some message 123",
                "another message"
            ]
        }
    }

    render() {
        var messageNodes = this.state.messages.map((message, i) => {
            return (
                <div key={i}>{message}</div>
            )
        });

        return (
            <div>{messageNodes}</div>
        )
    }
}

export default List;