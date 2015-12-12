import * as React from 'react';

class Sample extends React.Component<{ content: string }, {}> {
    render() {
        return <div>{this.props.content}</div>
    }
}

export default Sample;