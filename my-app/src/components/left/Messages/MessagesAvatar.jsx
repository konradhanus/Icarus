import React, {Component} from 'react';

class MessagesAvatar extends Component {
    render() {
        return (
            <div className="media-right">
                <img
                    src={"https://api.adorable.io/avatars/80/"+ this.props.name}
                    className="media-object"
                    style={{
                    width: 80
                }} alt=''/>
            </div>

        )
    }
}

export default MessagesAvatar;