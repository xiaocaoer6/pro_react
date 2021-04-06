import React from 'react';
import PureReact from './pureReact'

class ReduxTest extends React.Component {
    render() {
        return (
            <div className="redux-container">
                <PureReact store={this.props.store}/>
            </div>
        )
    }
}

export default ReduxTest;
