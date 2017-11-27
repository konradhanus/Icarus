import React, {Component} from 'react';

class MessagesContent extends Component {
    render() {
        return (
            <div className="media-body cloud">
                <h4 className="media-heading">{this.props.name}</h4>
                <p>{this.props.value}</p>
            </div>

        )
    }
}
export default MessagesContent;