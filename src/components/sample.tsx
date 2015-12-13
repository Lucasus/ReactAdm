import * as React from 'react';

export class Sample extends React.Component<{ content: string }, {}> {
  render() {
    return <div>{this.props.content}</div>
  }
}
